import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native';
import Saludar from '../components/Saludar';

export default function Home(props) {
  const { navigation } = props
  const goToSettings = () => {
    navigation.navigate("Settings")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>CURSO REACT NATIVE:  "Home"</Text>
      <Saludar name="Herian Palencia" age={22}></Saludar>
      <Saludar name="Galgadot" age={32}></Saludar>
      <Button title='ir a ajustes' onPress={goToSettings}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
