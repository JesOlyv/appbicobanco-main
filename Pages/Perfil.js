import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { DatabaseConnection } from './conexao';

const db = DatabaseConnection.getConnection();
const Perfil = ({ handleNavigation }) => {
  const profiles = ['Pedreiro', 'Gesseiro', 'Ladrilheiro', 'Pintor', 'Armador'];

  const handleIrParaWelcome = () => {
    handleNavigation('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfis dos Profissionais</Text>
      <View style={styles.profilesContainer}>
        {profiles.map((profile, index) => (
          <View key={index} style={styles.profileItem}>
            <Text style={styles.profileText}>{profile}</Text>
          </View>
        ))}
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Para nos contratar, envie um e-mail para:</Text>
        <Text style={styles.emailText}>constregis@gmail.com</Text>
      </View>
      <Button title="Inicio" onPress={handleIrParaWelcome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD', // Fundo amarelo claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000000', // Texto preto
  },
  profilesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  profileItem: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', // Texto preto
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000', // Texto preto
  },
  emailText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', // Texto preto
  },
});

export default Perfil;