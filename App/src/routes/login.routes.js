import React from 'react';
import { View, Text } from 'react-native';
import Login from '../pages/Login'
import NovoUsuario from '../pages/NovoUsuario'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import { Container } from './styles';


const Stack = createStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{headerShown: false} } 
      />
      <Stack.Screen 
      name="NovoUsuario" 
      component={NovoUsuario} 
      options={{headerTitleAlign:'center', headerTitle:'Novo Usuário'}}
      />            
    </Stack.Navigator>
      
   
  );
}

export default routes;