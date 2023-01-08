import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso react native</Text>
      <Saludar name="Pedro Castillo" age={44}></Saludar>
      <Saludar name="Herian Palencia" age={22}></Saludar>
      <Saludar name="Galgadot" age={32}></Saludar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
