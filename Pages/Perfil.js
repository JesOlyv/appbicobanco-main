import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { DatabaseConnection } from './conexao';

const db = DatabaseConnection.getConnection();

const Perfil = ({ handleNavigation }) => {
  const profiles = [
    { nome: 'Pedreiro Roger', experiencia: 'Experiência: 5 anos, me siga no instagram', instagram: '@rogerobr' },
    { nome: 'Gesseiro Otto', experiencia: 'Experiência: 3 anos , me siga no instagram', instagram: '@ottoob' },
    { nome: 'Ladrilheiro Lucio', experiencia: 'Experiência: 2 anos , me siga no instagram', instagram: '@obrlucio' },
    { nome: 'Pintor      Hugo', experiencia: 'Experiência: 4 anos , me siga no instagram', instagram: '@hugo_ob' },
    { nome: 'Armador Pedro', experiencia: 'Experiência: 6 anos , me siga no instagram', instagram: '@dro_br' },
  ];

  const [filtro, setFiltro] = useState('Todos');

  const handleIrParaWelcome = () => {
    handleNavigation('Welcome');
  };

  const handleFiltro = (filtroSelecionado) => {
    setFiltro(filtroSelecionado);
  };

  const perfisFiltrados = filtro === 'Todos' ? profiles : profiles.filter(profile => profile.nome.includes(filtro));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Profissionais</Text>
      <View style={styles.filterContainer}>
        <Button title="Todos" onPress={() => handleFiltro('Todos')} />
        <Button title="Pedreiros" onPress={() => handleFiltro('Pedreiro')} />
        <Button title="Gesseiros" onPress={() => handleFiltro('Gesseiro')} />
        <Button title="Ladrilheiros" onPress={() => handleFiltro('Ladrilheiro')} />
        <Button title="Pintores" onPress={() => handleFiltro('Pintor')} />
        <Button title="Armadores" onPress={() => handleFiltro('Armador')} />
      </View>
      <View style={styles.profilesContainer}>
        {perfisFiltrados.map((profile, index) => (
          <View key={index} style={styles.profileItem}>
            <Text style={styles.profileText}>{profile.nome}</Text>
            <Text style={styles.profileExperience}>{profile.experiencia}</Text>
            <Text style={styles.profileInstagram}>{profile.instagram}</Text>
          </View>
        ))}
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Siga-nos no Instagram: </Text>
        <Text style={styles.emailText}>@constregis</Text>
        <Text style={styles.contactText}>Para nos contratar: nos envie um e-mail: </Text>
        <Text style={styles.emailText}>constregis@gmail.com</Text>
        <Text style={styles.contactText}>Clientes cadastrados ganham 5% de desconto,no serviço contratado! FAÇA SEU CADASTRO!</Text>
      </View>
      <Button title="Início" onPress={handleIrParaWelcome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA', // Fundo amarelo claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000000', // Texto preto
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  profileItem: {
    width: 100,
    height: 120,
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
  profileExperience: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000', // Texto preto
  },
  profileInstagram: {
    fontSize: 12,
    textAlign: 'center',
    color: '#00008B', // Texto preto
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#00008B', // Texto preto
  },
});

export default Perfil;
