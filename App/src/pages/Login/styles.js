import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
flex: 1;
justify-content:center;
align-items:center;

`;

export const Texto = styled.Text`
color: black;
`

export const Input = styled.TextInput`
width:250px;
height:40px;
background-color:#eef6ec;
border-radius:5px;
margin:10px;
padding:10px;
border-width:1px;
border-color:#003f0d;

`

export const BtnLogar = styled.TouchableOpacity`
flex-direction:row;
background-color:rgba(83, 156, 10, 1.0);
height:40px;
width:280px;
border-radius:5px;
justify-content:center;
align-items:center;
top:40px;
`
export const TxtBtnLogar = styled.Text`
color:#ffffff;
font-weight:bold;
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
margin-top:100px;;
`

export const BtnNovoUsuario = styled.TouchableOpacity`
justify-content:center;
align-items:center;
width:auto;
height:auto;
`
export const TextBtnNovoUsuario = styled.Text`
font-weight:bold;
color:#000000;
`
export const BtnSite = styled.TouchableOpacity`
justify-content:center;
align-items:center;
width:auto;
height:auto;
`
export const TextBtnSite = styled.Text`
font-weight:bold;
color:#000000;
`