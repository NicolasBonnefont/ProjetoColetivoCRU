import React from 'react';
import { View,Text } from 'react-native';
import App from './app.routes'
import Login from './login.routes'

// import { Container } from './styles';

const routes = () => {
  return (
    <View style={{flex:1}}>
      <Login/>
    </View>  );
}

export default routes;