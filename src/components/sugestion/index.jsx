import styled from 'styled-components'

const SugestionContainer = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: black;`

const SugestionUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;`

const UserSugestionContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;`

const SugestionUserImage = styled.div`
  height: 32px;
  width: 32px;

  background: black;

  border-radius: 16px;`

const SugestionUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 12px;
  font-weight: bolder;

  color: black;
  `
const FollowBy = styled.p`
  color: #888888;
  font-weight: bolder;
`
const SugestionFollowButton = styled.p`
  color: #0281D4;
  font-weight: bolder;

  font-size: 12px;

  cursor: pointer;`

export function Sugestion(props){
  return (
    <SugestionContainer>
      <SugestionUserContainer>
        <UserSugestionContainer>
        <SugestionUserImage></SugestionUserImage>
        <SugestionUser>
          <p>{props.sugestionuser}</p>
          <FollowBy>Seguido(a) por {props.followedby}</FollowBy>
        </SugestionUser>
        </UserSugestionContainer>
        <SugestionFollowButton>Seguir</SugestionFollowButton>
      </SugestionUserContainer>
    </SugestionContainer>
  )
}