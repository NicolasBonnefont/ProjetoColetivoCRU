import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes'



export default function App() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      <NavigationContainer>
      <StatusBar style='light' backgroundColor='#000' />
        <Routes />
      </NavigationContainer>
    </SafeAreaView>

  );
}
