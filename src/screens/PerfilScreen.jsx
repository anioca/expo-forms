import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Title, Paragraph, IconButton, Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

const PerfilScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
      <Image
  source={require("../../assets/img/arraia.png")}
/>

        <Title style={styles.username}>Senac Terceirão</Title>
        <Paragraph style={styles.bio}>Joinville - SC</Paragraph>
      </View>

      <View style={styles.settingsButtonContainer}>
        <IconButton
          icon={() => (
            <MaterialCommunityIcons name="cog" size={24} color="#a547bf" />
          )}
          style={styles.settingsButton}
          onPress={() => navigation.navigate("ConfiguraçãoScreen")}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Title style={styles.statNumber}>256</Title>
          <Paragraph style={styles.statLabel}>Posts</Paragraph>
        </View>
        <View style={styles.statItem}>
          <Title style={styles.statNumber}>1.2k</Title>
          <Paragraph style={styles.statLabel}>Followers</Paragraph>
        </View>
        <View style={styles.statItem}>
          <Title style={styles.statNumber}>325</Title>
          <Paragraph style={styles.statLabel}>Following</Paragraph>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button mode="contained" style={styles.buttonPrimary}>
          Follow
        </Button>
        <Button mode="contained" style={styles.buttonSecondary}>
          Message
        </Button>
      </View>

      <Card style={styles.infoSection}>
        <Card.Title title="Sobre" titleStyle={styles.sectionTitle} />
        <Card.Content>
          <Paragraph style={styles.infoText}>Terceirão Senac 2024</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.gallerySection}>
        <Card.Title title="Recent Photos" titleStyle={styles.sectionTitle} />
        <Card.Content>
          <View style={styles.gallery}>
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              style={styles.galleryImage}
            />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    borderRadius: 75,
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    color: "#888",
    fontStyle: "italic",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#666",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: "#a547bf",
    flex: 1,
    marginRight: 10,
  },
  buttonSecondary: {
    backgroundColor: "#a547bf",
    flex: 1,
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    color: "#333",
    lineHeight: 24,
  },
  gallerySection: {
    marginBottom: 20,
  },
  gallery: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  settingsButtonContainer: {
    position: "absolute",
    top: 22,
    right: 20,
  },
  settingsButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default PerfilScreen;
