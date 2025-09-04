import { View, StyleSheet, Button, Text } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio2 = () => {
    const [contador, setcontador] = useState(0)

    function incrementar() {
        setcontador(contador+1)
    }

    function decrementar() {
        setcontador(contador-1)
    }
  return (
    <View style={styles.container}>
      <Button title='incrementar' onPress={incrementar}/>
      <Button title='decrementar' onPress={decrementar}/>
      <Text>O contador está em: {contador}</Text>
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

export default Exercicio2