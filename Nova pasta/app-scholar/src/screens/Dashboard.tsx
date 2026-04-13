import { View, Button } from 'react-native';

export default function Dashboard({ navigation }: any) {
  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Button title="Alunos" onPress={() => navigation.navigate('Aluno')} />
      <Button title="Professores" onPress={() => navigation.navigate('Professor')} />
      <Button title="Disciplinas" onPress={() => navigation.navigate('Disciplina')} />
      <Button title="Boletim" onPress={() => navigation.navigate('Boletim')} />
    </View>
  );
}