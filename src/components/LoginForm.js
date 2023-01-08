import { View, TextInput, Button, Text } from 'react-native';

export default function LoginForm() {
  return (
    <View>
      <Text>Componente Login Form</Text>
      <TextInput placeholder='name'></TextInput>
      <TextInput placeholder='surname'></TextInput>
      <Button title='submit' onPress={() => console.log("submited")}></Button>
    </View>
  );
}
