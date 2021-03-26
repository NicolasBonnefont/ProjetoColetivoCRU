import React from 'react';
import { View, ScrollView } from 'react-native';
import Logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerLogin,
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
import { Linking } from 'react-native';


// import { Container } from './styles';

const Login = () => {
  const navigation = useNavigation()
  return (  
    <Container>
     <StatusBar style='light' backgroundColor='rgb(83, 156, 10)'/>
      
        <ContainerLogin>
        <IMGLogo source={Logo} resizeMode='contain' />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="user" size={24} color="black" />
            <Input 
            placeholder='Login...'
            autoCapitalize='none'
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="key" size={24} color="black" />
            <Input 
            placeholder='Senha...'
            autoCapitalize='none'
            />
          </View>

          <BtnLogar onPress={() => alert('VOCE ME CLICOU')}>
            <TxtBtnLogar >
              LOGAR  </TxtBtnLogar>
            <Feather name="log-in" size={24} color='#Fff' />
          </BtnLogar>

        </ContainerLogin>


        <ContainerFooter>

          <BtnNovoUsuario
          onPress={()=> navigation.navigate('NovoUsuario')}
          >
            <TextBtnNovoUsuario>Novo Usuário  </TextBtnNovoUsuario>
            <Feather name="user-plus" size={24} color="black" />
          </BtnNovoUsuario>

          <BtnSite
          onPress={()=> Linking.openURL('https://coletivocru.company.site/')}
          >
            <TextBtnSite>Site de compras  </TextBtnSite>
            <AntDesign name="tagso" size={24} color="black" />
          </BtnSite>


        </ContainerFooter>
    </Container>
  );
}

export default Login;