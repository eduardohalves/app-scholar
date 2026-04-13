import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function Professor() {
  const [form, setForm] = useState({
    nome: '',
    titulacao: '',
    area: '',
    tempo: '',
    email: '',
  });

  function handle(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  function salvar() {
    console.log(form);
    Alert.alert('Professor cadastrado!');
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={(v) => handle('nome', v)} />
      <TextInput placeholder="Titulação" onChangeText={(v) => handle('titulacao', v)} />
      <TextInput placeholder="Área" onChangeText={(v) => handle('area', v)} />
      <TextInput placeholder="Tempo de docência" onChangeText={(v) => handle('tempo', v)} />
      <TextInput placeholder="Email" onChangeText={(v) => handle('email', v)} />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}