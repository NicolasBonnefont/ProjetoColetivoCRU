import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
flex: 1;
justify-content:center;
align-items:center;
background-color:#fff;
`;


export const ContainerLogin = styled.View`
justify-content:center;
align-items:center;
padding:5px;
`

export const Texto = styled.Text`
color: black;
`

export const Input = styled.TextInput`
width:280px;
height:40px;
background-color:#ecf6ee;
border-radius:5px;
margin:10px;
padding:10px;
border-width:0.5px;
border-color:#003f0d;
`

export const BtnLogar = styled.TouchableOpacity`
flex-direction:row;
background-color:rgb(83, 156, 10);
height:40px;
width:310px;
border-radius:5px;
justify-content:center;
align-items:center;
margin-top:40px;

`
export const TxtBtnLogar = styled.Text`
color:#ffffff;
font-weight:600;
`

export const IMGLogo = styled.Image`
width:200px;
height:200px;
`

export const ContainerFooter = styled.View`
flex-direction:row;
width:100%;
height:80px;
justify-content:space-around;
top:auto;
bottom:auto;

`

export const BtnNovoUsuario = styled.TouchableOpacity`
justify-content:center;
align-items:center;
width:auto;
height:auto;
`
export const TextBtnNovoUsuario = styled.Text`
font-weight:600;
color:#000000;
`
export const BtnSite = styled.TouchableOpacity`
justify-content:center;
align-items:center;
width:auto;
height:auto;
`
export const TextBtnSite = styled.Text`
font-weight:600;
color:#000000;
`