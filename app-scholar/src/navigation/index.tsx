import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Aluno from '../screens/Aluno';
import Professor from '../screens/Professor';
import Disciplina from '../screens/Disciplina';
import Boletim from '../screens/Boletim';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Aluno" component={Aluno} />
        <Stack.Screen name="Professor" component={Professor} />
        <Stack.Screen name="Disciplina" component={Disciplina} />
        <Stack.Screen name="Boletim" component={Boletim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}