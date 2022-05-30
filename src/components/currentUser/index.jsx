import styled from 'styled-components'

const CurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 316px;
  height: 60px;`

const DataCurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const CurrentUserImage = styled.div`
  width: 56px;
  height: 56px;

  border-radius: 28px;

  background: white;`

const CurrentUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  color: white;
  h1{
  font-size: 14px;
  font-weight: bolder;
  }
  `
const CurrentUserNameValue = styled.h1`
  color: #868686;
`
const ChangeCurrentUserButton = styled.h1`
color: #0095F6;

font-size: 12px;
font-weight: bolder;

cursor: pointer;`

export function CurrentUser(props){
  return (
    <CurrentUserContainer>
      <DataCurrentUserContainer >
        <CurrentUserImage style={{backgroundImage: `url(${props.currentuserimg})`}}></CurrentUserImage>
        <CurrentUserName>
          <h1>{props.currentuser}</h1>
          <CurrentUserNameValue>{props.currentusername}</CurrentUserNameValue>
        </CurrentUserName>
      </DataCurrentUserContainer>
      <ChangeCurrentUserButton>Mudar</ChangeCurrentUserButton>
    </CurrentUserContainer>
  )
}