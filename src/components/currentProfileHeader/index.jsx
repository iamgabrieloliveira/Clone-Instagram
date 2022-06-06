import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { UilSetting, UilTimes} from '@iconscout/react-unicons'

const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 100px auto;
`

const UserContainer = styled.div`
  padding: 0px 80px;
  width: 950px;
  height: 330px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
`
const CurrentProfileUser = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: 1px solid rgb(219, 219, 219);

  background-size: 160px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`
const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const UserDataTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  h1{
    font-size: 24px;
    font-weight: normal;
  }
  button{
    border: none;
    padding: 5px 9px;
    border-radius: 4px;
    background: white;
    font-weight: bolder;
    font-size: 12px;
    border: 1px solid rgb(219, 219, 219);
    cursor: pointer;
  }
`

const UserDataNumbers = styled.div`
  display: flex;
  gap: 25px;
`

const UserDataStat = styled.div``

const UserDataBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const UserDataName = styled.b``

const UserDataTextBio = styled.p``

const UserStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 8px;
  cursor: pointer;
`

const UserStoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 950px;
  padding: 0px 70px;
`

const UserStorys = styled.div`
  display: flex;
  gap: 40px;
`
const StoryName = styled.p`
  font-size: 12px;
  font-weight: bold;
`

const StoryCircle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 90px;
  background: black;
  
  background-size: 75px;
  background-position: center;
  `

const HardLine = styled.hr`
  width: 900px;
  border: none;
  background: #DBDBDB;
  height 1px;
  margin-top: 65px;
`
const EditDialogRoot = styled.div``

const EditDialogOverlay = styled.div`
  position: fixed;
  z-index: 100000;
  inset: 0;
  background: rgb(0, 0, 0, .5);
`

const EditDialogContent = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: white;
  width: 500px;
  height: 510px;
  padding: 30px 30px 50px 30px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 6px;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const EditDialogTitle = styled.div`
  h1{
    font-weight: bolder;
    font-size: 18px;
  }`

const EditDialogText = styled.div`
  `

const EditDialogInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 90%;
`

const EditDialogInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  input{
    padding: 0px 10px;
    height: 32px;
    width: 200px;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 3px;
  }

  input:focus{
    outline: 0;
  }

  textarea{
    width 200px;
    height: 175px;
    padding: 4px 8px;
    resize: none;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 3px;
  }
  textarea:focus{
    outline: 0;
  }
`

const EditDialogButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button{
    background: #0095F6;
    color: white;
    border: none;
    padding: 8px 13px;
  }
`
const CloseDialogEditButton = {
  position: 'absolute',
  right: 4,
  top: 4,
  cursor: 'pointer'
}

export function CurrentProfileHeader(props) {
  
  const [EditDialog, setEditDialog] = useState(false)
  
  const [ UserName, setUserName] = useState("oliveira.gabriel")

  const [Name, setName] = useState("Gabriel")

  const [UserBio, setUserBio] = useState("Estou aprendendo React")

    window.onkeydown = (e) => {
      console.log(e.key)
      if(EditDialog && e.key == "Escape"){
        setEditDialog(false)
        document.body.style.overflow = 'auto'
      }
    }
  

  const fnEditDialog = () => {
    if(EditDialog){
      setEditDialog(false)
      document.body.style.overflow = 'auto'
    }
    else{
      setEditDialog(true)
      document.body.style.overflow = 'hidden'
    }
  }


  return(
    <Body>
    <UserContainer>
      <CurrentProfileUser 
      style={{
      backgroundImage: `url(${props.currentuser})`}}>

      </CurrentProfileUser>
      <UserDataContainer>
        <UserDataTitle>
          <h1>{UserName}</h1>
          <EditDialogRoot>

          <button
          onClick={fnEditDialog}
          >Editar perfil
          </button>

         {EditDialog &&
         <>
          <EditDialogOverlay onClick={fnEditDialog}>
          </EditDialogOverlay>

          <EditDialogContent>
            <UilTimes
              onClick={fnEditDialog}
              style={CloseDialogEditButton}/>
            <EditDialogTitle>
              <h1>Aqui você pode editar seu Perfil</h1>
            </EditDialogTitle>
            <EditDialogText>
              Faça as alterações em seu perfil. Clique em "Salvar" quando terminar.
            </EditDialogText>
            <EditDialogInputs>
              <EditDialogInput>
                <b>Nome</b> 
                <input id="nameinput" type="text" placeholder={Name} />
              </EditDialogInput>
              <EditDialogInput>
                <b>Nome de usuário</b> 
                <input id="usernameinput" type="text" placeholder={UserName}/>
              </EditDialogInput>
              <EditDialogInput>
                <b>Biografia</b> 
                <textarea id="bio" type="text" placeholder={UserBio}/>
              </EditDialogInput>
            </EditDialogInputs>
            <EditDialogButtons>
              <button id="sendbutton" onClick={() => {
                setUserName(usernameinput.value)
                setName(nameinput.value)
                setUserBio(bio.value)
                fnEditDialog()
              }}>Salvar</button>
            </EditDialogButtons>
          </EditDialogContent>
          </>
          }
          </EditDialogRoot>
          
          <UilSetting 
            style={{
              cursor: 'pointer'
              }}
          />
        </UserDataTitle>
        <UserDataNumbers>
          <UserDataStat><b>8</b> publicacoes</UserDataStat>
          <UserDataStat><b>399</b> seguidores</UserDataStat>
          <UserDataStat><b>350</b> seguindo</UserDataStat>
        </UserDataNumbers>
        <UserDataBio>
          <UserDataName>{Name}</UserDataName>
          <UserDataTextBio>{UserBio}</UserDataTextBio>
        </UserDataBio>
      </UserDataContainer>
    </UserContainer>
    <UserStoryWrapper>
      <UserStorys>
        <UserStory>
          <StoryCircle style={{backgroundImage: `url(${props.storyimg})`}}></StoryCircle>
          <StoryName>ReactRouter</StoryName>
        </UserStory>
        <UserStory>
          <StoryCircle style={{backgroundImage: `url(${props.storyimg})`}}></StoryCircle>
          <StoryName>Studying</StoryName>
        </UserStory>
        <UserStory>
          <StoryCircle style={{backgroundImage: `url(${props.storyimg})`}}></StoryCircle>
          <StoryName>Programming</StoryName>
        </UserStory>
      </UserStorys>
    </UserStoryWrapper>
    <HardLine></HardLine>
    </Body>
  ) 
  
}