import styled from 'styled-components/native'

export const Container = styled.ScrollView`
flex:1;
background-color:#fff;

`
export const ContainerForm = styled.View`
width:90%;
height:auto;
padding:5px;
margin:auto;
margin-top:4%;

`
export const ContainerBtn = styled.View`
flex-direction:row;
`
export const TextTitulo = styled.Text`
font-weight:bold;
font-size:14px;
color:#000;
margin-bottom:5px;
`
export const Input = styled.TextInput`
width:100%;
height:40px;
border:0.5px;
border-radius:5px;
padding:5px;
margin-bottom:10px;
border-color:#003f0d;

`
export const BtnSalvar = styled.TouchableOpacity`
width:100%;
height:42px;
justify-content:center;
align-items:center;
background-color:rgb(83, 156, 10);
border-radius:5px;
margin-top:auto;
`
export const TextBtn = styled.Text`
color:#fff;
font-weight:bold;
`