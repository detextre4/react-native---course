import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Settings(props) {
  const { navigation } = props
  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
      <Text>esto</Text>
      <Text>es el settings</Text>
      <Button title='ir a home' onPress={() => goToPage("Home")}></Button>
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
