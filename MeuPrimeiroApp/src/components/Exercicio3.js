import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Exercicio3 = () => {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>      
      <TextInput
        placeholder="Digite aqui..."
        value={texto}
        style={styles.input}
        onChangeText={setTexto} 
      />

      <Text style={styles.texto}>
        {texto}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20
    },
    texto: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 20,
    }
})

export default Exercicio3