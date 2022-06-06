import styled from 'styled-components'

import { UilEllipsisH, 
  UilHeart, 
  UilComment, 
  UilMessage,
  UilBookmarkFull, 
  UilGrin } 
from '@iconscout/react-unicons'

const PublicationContainer = styled.div`
  border: 1px solid #DBDBDB;
  border-radius: 7px;

  width: 470px;

  margin-right: 320px;
  margin-top: 20px;

  @media(max-width: 1000px) {
      margin-right: 0;    
      
  }`

const PubliactionHeader = styled.div`
  height: 50px;

  border-bottom: 1px solid #DBDBDB;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 24px;
  `

const PublicationHeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p{
    color: black;

    font-size: 14px;
    font-weight: bolder;

    cursor: pointer;
  }
  `

const PublicationHeaderUserImage = styled.div`
  width: 37px;
  height: 37px;

  background: white;
  background-size: 37px;

  border-radius: 18px;

  cursor: pointer;`

const PublicationImageContainer = styled.div`

  height: 260px;
  width: 100%;

  background-size: 500px;
  background-repeat: no-repeat;
  background-position: center;`

const PublicationDescriptionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: black;
  font-size: 14px;

  padding: 10px;`

const PublicationDescriptionHeader = styled.div`
  display: flex;
  gap: 10px;

  color: black;`
  
const SaveButtonStyle = {
  position: "relative",
  left: "322px",

  cursor: "pointer"
}

const PublicationDescriptionData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;`

const PublicationCommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  margin-top: 30px;

  p{
    color: #0095F6;

   cursor: pointer;
  }`

const PublicationCommentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  input{
    border: none;

    background: none;

    padding-right: 150px;

    color: black;
    font-size: inherit;
  }
  input:focus{
    border: none;
    outline: none;
    box-shadow: 0 0 0 0;
  }
  `


export function Publication(props){
  return (
    <PublicationContainer>
      <PubliactionHeader>
        <PublicationHeaderUser>
          <PublicationHeaderUserImage style={{backgroundImage: `url(${props.pubuserimage})`}}></PublicationHeaderUserImage>
          <p>{props.pubusername}</p>
        </PublicationHeaderUser>
        <UilEllipsisH style={{color: "white", cursor: "pointer"}}/>
      </PubliactionHeader>
      <PublicationImageContainer style={{backgroundImage: `url(${props.pubimage})`}}></PublicationImageContainer>
      <PublicationDescriptionContainer>
        <PublicationDescriptionHeader>
          <UilHeart style={{cursor: "pointer"}}/>
          <UilComment style={{cursor: "pointer"}}/>
          <UilMessage  style={{cursor: "pointer"}}/>
          <UilBookmarkFull  style={SaveButtonStyle} /> 
        </PublicationDescriptionHeader>
        <PublicationDescriptionData>
        <p>curtido por bla bla bla</p>
        <p>
        <span style={{fontWeight: 'bolder'}}> 
        {props.pubusername} 
        </span> 
        {props.text} 
        </p>
        <p>Há 2 horas</p>
        </PublicationDescriptionData>
        <PublicationCommentInputContainer >
          <PublicationCommentInput>
          <UilGrin />
          <input type="text" placeholder='Adicione um comentário...' />
          <p>Publicar</p>
          </PublicationCommentInput>
        </PublicationCommentInputContainer>
      </PublicationDescriptionContainer>
    </PublicationContainer>
  )
}