import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const Exercicio4 = () => {
  const times = [
    'São Paulo',
    'Palmeiras',
    'Vasco',
    'Sport',
    'Santa cruz',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Clubes de Futebol</Text>

        {times.map((time, index) => (
          <Text key={index} >
            {time}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Exercicio4;