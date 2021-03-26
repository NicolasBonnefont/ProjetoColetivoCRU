import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Principal from '../pages/Principal'

// import { Container } from './styles';

const Stack = createBottomTabNavigator();

const routes = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Principal" component={Principal} />
      
    </Stack.Navigator>
  );
}

export default routes;