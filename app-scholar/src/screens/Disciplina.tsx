import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function Disciplina() {
  const [form, setForm] = useState({
    nome: '',
    cargaHoraria: '',
    professor: '',
    curso: '',
    semestre: '',
  });

  function handle(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  function salvar() {
    console.log(form);
    Alert.alert('Disciplina cadastrada!');
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={(v) => handle('nome', v)} />
      <TextInput placeholder="Carga horária" onChangeText={(v) => handle('cargaHoraria', v)} />
      <TextInput placeholder="Professor" onChangeText={(v) => handle('professor', v)} />
      <TextInput placeholder="Curso" onChangeText={(v) => handle('curso', v)} />
      <TextInput placeholder="Semestre" onChangeText={(v) => handle('semestre', v)} />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}