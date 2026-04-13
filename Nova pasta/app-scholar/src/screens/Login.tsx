import { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

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
    <View style={{ padding: 20, justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Login
      </Text>

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setSenha} />

      {erro ? (
        <Text style={{ color: 'red', marginBottom: 10 }}>
          {erro}
        </Text>
      ) : null}

      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}