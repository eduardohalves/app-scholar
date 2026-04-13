import { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const { login } = useAuth();

  function entrar() {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    login(email); 
    navigation.replace('Dashboard');
  }

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22 }}>Login</Text>

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setSenha} />

      {erro ? <Text style={{ color: 'red' }}>{erro}</Text> : null}

      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}