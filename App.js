import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Welcome from './Pages/Welcome';
import LoginCadastro from './Pages/LoginCadastro';
import Perfil from './Pages/Perfil';
import { DatabaseConnection } from './Pages/conexao.js';

const db = DatabaseConnection.getConnection();
export default function App() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome handleNavigation={handleNavigation} />;
      case 'LoginCadastro':
        return <LoginCadastro handleNavigation={handleNavigation} />;
      case 'Perfil':
        return <Perfil handleNavigation={handleNavigation} />;
      default:
        return <Welcome handleNavigation={handleNavigation} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderPage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
