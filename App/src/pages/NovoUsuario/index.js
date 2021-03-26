import React from 'react';
import { View, Text, ScrollView } from 'react-native';


import {
  Container,
  ContainerForm,
  Input,
  TextTitulo,
  BtnSalvar,
  TextBtn

} from './styles';

const NovoUsuario = () => {
  return (
    <Container>         
      <ContainerForm>
        <TextTitulo>Informe seu nome completo:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Informe seu CEP:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Informe Endereço:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Informe Cidade:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Informe Bairro:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Email:</TextTitulo>
        <Input placeholder='Nome Completo' />

        <TextTitulo>Senha:</TextTitulo>
        <Input placeholder='Nome Completo' />




      <BtnSalvar>
        <TextBtn>Salvar  </TextBtn>
      </BtnSalvar>
     
      </ContainerForm>
    </Container>

  );
}

export default NovoUsuario;