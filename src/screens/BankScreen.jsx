import React, { useState } from 'react';
import { Surface, Text, Button } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage'; // Certifique-se de que está importado corretamente
import { getAuth } from 'firebase/auth'; // Use getAuth para evitar inicializações duplicadas
import app from '../config/firebase'; // Importação correta do Firebase

const auth = getAuth(app); // Usando getAuth para evitar inicializações duplicadas

export default function BankScreen({ navigation }) {
  const [balance, setBalance] = useState(1356.00); // Saldo inicial inspirado na imagem
  const [creditCardBalance, setCreditCardBalance] = useState(1094.80); // Fatura atual do cartão
  const [creditCardLimit, setCreditCardLimit] = useState(730.00); // Limite disponível do cartão
  const [depositAmount, setDepositAmount] = useState(''); // Valor do depósito
  const [withdrawAmount, setWithdrawAmount] = useState(''); // Valor do saque

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setDepositAmount('');
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setWithdrawAmount('');
    }
  };

  return (
    <Surface style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.companyName}>UnicForm</Text>
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.accountLabel}>Conta</Text>
          <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
        </View>
        <View style={styles.actionContainer}>
          <Button mode="text" icon="bank-transfer" onPress={() => navigation.navigate("PixScreen")}>
            Área Pix
          </Button>
          <Button mode="text" icon="barcode" onPress={() => navigation.navigate("PagarScreen")}>
            Pagar
          </Button>
          <Button mode="text" icon="arrow-right-bold" onPress={() => navigation.navigate("TransferirScreen")}>
            Transferir
          </Button>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabel}>Cartão de crédito</Text>
          <Text style={styles.cardBalance}>Fatura atual</Text>
          <Text style={styles.cardAmount}>R$ {creditCardBalance.toFixed(2)}</Text>
          <Text style={styles.cardLimit}>Limite disponível: R$ {creditCardLimit.toFixed(2)}</Text>
        </View>
        <View style={styles.bottomActions}>
          <Button onPress={() => navigation.navigate("HomeScreen")} mode="contained">
            Voltar
          </Button>
        </View>
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 40, // Adiciona um pouco de espaço no final do conteúdo
  },
  header: {
    backgroundColor: '#5e2c80',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  companyName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  accountLabel: {
    color: '#444',
    fontSize: 16,
  },
  balance: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  cardContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardLabel: {
    color: '#444',
    fontSize: 16,
    marginBottom: 5,
  },
  cardBalance: {
    color: '#444',
    fontSize: 14,
  },
  cardAmount: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardLimit: {
    color: '#444',
    fontSize: 14,
    marginTop: 5,
  },
  bottomActions: {
    marginTop: 20,
    alignItems: 'center',
  },
});
