import React from 'react';
import { View, Text, Image } from 'react-native';
import Logo from '../../assets/logo.png'
import Fundo from '../../assets/fundo.jpg'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Texto, BtnLogar,
  TxtBtnLogar,
  Input,
  ContainerLogo,
  IMGLogo,
  ContainerFooter,
  BtnNovoUsuario,
  TextBtnNovoUsuario,
  BtnSite,
  TextBtnSite

} from './styles'

// import { Container } from './styles';

const Login = () => {
  return (
    <Container>

      <IMGLogo source={Logo} resizeMode='contain' />

      <View style={{justifyContent:'center', alignItems:'center', height:250}}>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Feather name="user" size={24} color="black"  />
        <Input />
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Feather name="key" size={24} color="black" />
        <Input />
      </View>


      <BtnLogar onPress={() => alert('VOCE ME CLICOU')}>
        <TxtBtnLogar >
          LOGAR  </TxtBtnLogar>
        <Feather name="log-in" size={24} color='#Fff' />
      </BtnLogar>

      </View>




      <ContainerFooter>

        <BtnNovoUsuario>
          <TextBtnNovoUsuario>Novo Usuário  </TextBtnNovoUsuario>
          <Feather name="user-plus" size={24} color="black" />
        </BtnNovoUsuario>

        <BtnSite>
          <TextBtnSite>Site de compras  </TextBtnSite>
          <AntDesign name="tagso" size={24} color="black" />
        </BtnSite>


      </ContainerFooter>

    </Container>
  );
}

export default Login;