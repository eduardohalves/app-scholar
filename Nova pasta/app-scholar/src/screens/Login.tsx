import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    setErro('');
    navigation.replace('Dashboard');
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />

      {erro ? <Text style={{ color: 'red' }}>{erro}</Text> : null}

      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}