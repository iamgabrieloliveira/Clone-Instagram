import styled from 'styled-components'
import { 
  UilImage, 
} 
from '@iconscout/react-unicons'


const AddPubModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;

  background: rgba(0,0,0,0.6);
`
const AddPubModalContainer = styled.div `
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;

  width: 700px;
  height: 700px;  

  border-radius: 10px;
`
const AddPubModalHeader = styled.h1 `
  text-align: center;
  
  color: black;

  font-size: 15px;
  letter-spacing: 1px;

  padding: 10px 0;

  border-bottom: 1px solid #DBDBDB;
`
const AddPubModalCenter = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;
`

export function AddPubModal() {

  

  return(
    <div>
      <AddPubModalOverlay></AddPubModalOverlay>
    <AddPubModalContainer>
      <AddPubModalHeader>
        Criar nova publicação 
      </AddPubModalHeader>
      <AddPubModalCenter>
        <UilImage style={{
          width: "80px",
          height: "80px",
        }}/>
        <p>Arraste as fotos e os vídeos aqui</p>
        <input 
        id='inputpub'
        type="file"
        placeholder='Selecionar do computador'
         />
      </AddPubModalCenter>
    </AddPubModalContainer>
    </div>
)}

