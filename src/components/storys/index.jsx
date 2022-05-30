import styled from 'styled-components'

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  width: 54px;

  cursor: pointer;
`

const StoryImage = styled.div`
  width: 54px;
  height: 54px;
  
  border: 1px solid rgb(13, 255, 0);
  border-radius: 27px;
  
  background: #000;

  background-size: 54px;
  background-repeat: no-repeat;
  background-position: center;
`

const StoryUserName = styled.p`
  color: white;

  font-size: 12px;
  font-weight: normal;`




export function Story(props){

  return(
  <>
  <StoryContainer>
  <StoryImage style={{ backgroundImage: `url(${props.storyuserimage})` }}>
  </StoryImage>
  <StoryUserName>{props.storyUserName}</StoryUserName>
  </StoryContainer>
  </>
  )
}