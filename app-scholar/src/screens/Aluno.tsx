import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function Aluno() {
  const [form, setForm] = useState({
    nome: '',
    matricula: '',
    curso: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: '',
  });

  function handle(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  function salvar() {
    console.log(form);
    Alert.alert('Aluno cadastrado!');
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={(v) => handle('nome', v)} />
      <TextInput placeholder="Matrícula" onChangeText={(v) => handle('matricula', v)} />
      <TextInput placeholder="Curso" onChangeText={(v) => handle('curso', v)} />
      <TextInput placeholder="Email" onChangeText={(v) => handle('email', v)} />
      <TextInput placeholder="Telefone" onChangeText={(v) => handle('telefone', v)} />
      <TextInput placeholder="CEP" onChangeText={(v) => handle('cep', v)} />
      <TextInput placeholder="Endereço" onChangeText={(v) => handle('endereco', v)} />
      <TextInput placeholder="Cidade" onChangeText={(v) => handle('cidade', v)} />
      <TextInput placeholder="Estado" onChangeText={(v) => handle('estado', v)} />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}