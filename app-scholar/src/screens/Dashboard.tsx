import { View, Text } from 'react-native';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard({ navigation }: any) {
  const { user, logout } = useAuth();

  return (
    <View style={{ padding: 20, gap: 10, flex: 1 }}>
      <Text>Bem-vindo: {user?.email}</Text>

      <Button title="Alunos" onPress={() => navigation.navigate('Aluno')} />
      <Button title="Professores" onPress={() => navigation.navigate('Professor')} />
      <Button title="Disciplinas" onPress={() => navigation.navigate('Disciplina')} />
      <Button title="Boletim" onPress={() => navigation.navigate('Boletim')} />

      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 30 }}>
        <Button
          title="Sair"
          onPress={() => {
            logout();
            navigation.replace('Login');
          }}
        />
      </View>
    </View>
  );
}