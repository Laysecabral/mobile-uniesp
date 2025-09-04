import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio1 = ({ nome }) => {
  return (
    <View style={styles.container}>
        <Text>Olá, { nome }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Exercicio1