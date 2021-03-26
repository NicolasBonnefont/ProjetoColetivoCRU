import React, { useState } from 'react';
import { View, Text } from 'react-native';
import App from './app.routes'
import Login from './login.routes'

// import { Container } from './styles';

const routes = () => {

  const [logado, setLogado] = useState(false)
  return (

    <View style={{ flex: 1 }}>
      { logado ? <App /> : <Login />}
    </View>)

}

export default routes;