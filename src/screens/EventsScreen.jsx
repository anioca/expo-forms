import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { Button, Surface, Text, Dialog, Portal } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EventsScreen({ navigation }) {
  const [eventName, setEventName] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [gallery, setGallery] = useState([]);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (coverImage === null) {
        setCoverImage(result.uri);
      } else {
        setGallery([...gallery, result.uri]);
      }
    }
  };

  const handleSubmit = () => {
    if (!eventName.trim() || !coverImage || !description.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e adicione uma imagem de capa.');
      return;
    }
  
    const newEvent = {
      id: Date.now().toString(),  // Gera um ID único para o evento
      title: eventName,
      subtitle: "Novo Evento", // Você pode adicionar um campo para o local do evento
      image: coverImage,
      date: new Date().toLocaleDateString(),  // Data atual ou você pode pedir a data do evento
      description: description,
      icon: "calendar",  // Ícone padrão, você pode mudar se quiser
    };
  
    Alert.alert('Sucesso', 'Evento criado com sucesso!');
  
    navigation.navigate('HomeScreen', { newEvent }); // Navegar para a HomeScreen com o novo evento
  };
  return (
    <Surface style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Eventos</Text>

        <Button mode="contained" onPress={pickImage} style={styles.imageButton}>
          {coverImage ? (
            <Image source={{ uri: coverImage }} style={styles.coverImage} />
          ) : (
            <Text style={{ color: "#fff" }}>Selecionar Imagem de Capa</Text>
          )}
        </Button>

        {/* Campo para nome do evento */}
        <TextInput
          style={styles.input}
          placeholder="Nome do Evento"
          value={eventName}
          onChangeText={setEventName}
        />

        {/* Campo para descrição do evento */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Descrição do Evento"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        {/* Botão para adicionar fotos à galeria */}
        <Button
          mode="contained"
          onPress={showDialog}
          style={styles.galleryButton}
        >
          Adicionar Fotos à Galeria
        </Button>

        {/* Container para imagens da galeria */}
        <View style={styles.galleryContainer}>
          {gallery.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.galleryImage} />
          ))}
        </View>

        {/* Botão para criar evento */}
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          Criar Evento
        </Button>
      </ScrollView>

      {/* Diálogo para seleção de foto */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Selecionar Foto</Dialog.Title>
          <Dialog.Content>
            <Button onPress={pickImage}>Escolher Imagem</Button>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancelar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Footer com navegação */}
      <View style={styles.footer}>
        <Button
          onPress={() => navigation.navigate("EventsScreen")}
          mode="contained"
          style={styles.footerButton}
        >
          <MaterialCommunityIcons name="calendar" size={24} color="#a547bf" />
        </Button>
        <Button
          onPress={() => navigation.navigate("HomeScreen")}
          mode="contained"
          style={styles.footerButton}
        >
          <MaterialCommunityIcons name="home" size={24} color="#a547bf" />
        </Button>
        <Button
          onPress={() => navigation.navigate("BankScreen")}
          mode="contained"
          style={styles.footerButton}
        >
          <MaterialCommunityIcons name="bank" size={24} color="#a547bf" />
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Cor de fundo em pastel
  },
  innerContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 80, // Padding para evitar sobreposição com o footer
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#a547bf", // Cor pastel para o título
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF", // Cor de fundo do input
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: "top",
  },
  imageButton: {
    backgroundColor: "#a547bf", // Cor pastel para o botão de imagem
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: "center",
  },
  coverImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  galleryButton: {
    backgroundColor: "#D8BFD8", // Cor pastel para o botão de galeria
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
  },
  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: "#C0C0C0", // Cor pastel para o botão de submissão
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  footerButton: {
    borderRadius: 8,
    backgroundColor: "transparent",
    flex: 1,
    marginHorizontal: 5,
  },
});
