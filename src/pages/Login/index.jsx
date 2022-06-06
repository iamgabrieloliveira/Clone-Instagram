import React from "react"
import { useState } from "react"
import { UilFacebook } from '@iconscout/react-unicons'
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Link } from "react-router-dom"

var buttonColor = "#DBDBDB"

const ResetGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    background: #FAFAFA;
  }
`
const Body = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
  `
const LoginInput = styled.input`
  width: 260px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #DBDBDB;
  background: #FAFAFA;
  padding: 4px 8px;
  font-size: 12px;

  &:focus{
    outline: 0;
  }
`
const LoginButton = styled.button`
  width: 260px;
  height: 36px;
  border-radius: 4px;
  border: none;
  color: white;
  background: #dbdbdb;
  font-weight: normal;
  cursor: pointer;

  &:focus{
    outline: 0;
  }
`
const LoginInputs  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  background: white;

  width: 360px;
  height: 400px;

  border: 1px solid #DBDBDB;
  border-radius: 1px;

  padding: 24px;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

`
const HardLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  background: white;

  p{
    font-size: 13px;
  }
  hr{
    width: 100px;
    height 1px;
    border: none;
    background:#DBDBDB;
  }

`
const ConectFacebook = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 17px;
  cursor: pointer;
  background: white; 
  p{
    font-size: 14px;
    color: #385185;
    background: white; 
  }
`

const ForgetPassword = styled.p `
  margin-top: 15px;
  font-size: 12px;
  color: #385185;
  cursor: pointer;
  background: white; 
`
const DontHaveAccount = styled.div   `
  width: 360px;

  border: 1px solid #DBDBDB;
  border-radius: 1px;
  text-align: center;

  background: white;

  p{
    margin: 15px;
    font-size: 14px;
    background: white;
  }
  span{
    color: #385185;
    background: white;
  }
`
const MobileContainer = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`



export function LoginPage(){

  return(
    <Body>
    <ResetGlobal/>
    <img src="../../assets/Instagramlogin.png"/>
    <RightContainer>
    <LoginContainer>
      <img style={{width: "175px", marginBottom: '20px'}} src="../../assets/instagramloginlogo.png"/>
      <LoginInputs>
      <LoginInput id="loginid" type="text" placeholder="Telefone, nome de usuário ou email" />
      <LoginInput onChange={(e) => 
        {
          if(e.target.value == "gabriel123" || loginid.value == 'gabriel123'){
            loginbtn.style.background = '#0095F6'
        }}} id="password"
       type="password" placeholder="Senha" />
      </LoginInputs>
      <Link to='/home'><LoginButton id="loginbtn">Entrar</LoginButton></Link>
      <HardLine><hr /><p>OU</p><hr /></HardLine>
      <ConectFacebook><UilFacebook style={{color: "#385185"}} /><p>Entrar com o Facebook</p></ConectFacebook>
      <ForgetPassword>Esqueceu a senha</ForgetPassword>
    </LoginContainer>
    <DontHaveAccount>
      <p>Não tem uma conta? <span>Cadastre-se</span></p>
    </DontHaveAccount>
    <MobileContainer>
      <p>Obtenha o Aplicativo</p>
      <img style={{width: "260px"}} src="../../assets/Login Buttons.png"/>
    </MobileContainer>
    </RightContainer>
    </Body>
  )
}