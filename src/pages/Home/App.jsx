import { 
  UilAngleRightB, 
  UilAngleLeftB,
} 
from '@iconscout/react-unicons'
import { CurrentUser } from '../../components/currentUser'
import { Publication } from '../../components/publication'
import { Story } from '../../components/storys'
import { useRef, useState } from 'react'
import { Sugestion } from '../../components/sugestion'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Header } from '../../components/header'

const GlobalResetStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }
  `

  const Body = styled.div`
    background: white;

    padding-bottom: 50px;

    overflow: hidden;
  `

  const RightContainer = styled.section`
  width: 45%;
  height: calc(100% - 60px);

  position: fixed;
  right: 0px;
  bottom: 0px;

  padding: 36px 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(max-width: 1500px) {
      width: 40%;
  }
  @media(max-width: 1000px){
      display: none;

  }
  `

  const MidContainer = styled.section`
  width: 100%;
  height: calc(100% - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`

  const StorysContainer = styled.div`
  width: 470px;
  height: 120px;

  margin-right: 320px;
  margin-top: 80px;

  position: relative;

  border: 1px solid #DBDBDB;
  border-radius: 5px;

  padding: 25px 0px;

  @media(max-width: 1000px){
      margin-right: 0px;
  
  }
  `
  

  const ScrollRightButtonStyle ={ 
    color: "black",

    background: "white",

    borderRadius: "100px",
    border: "1px solid #DBDBDB",

    position: "absolute",

    left: "10px",
    top: "43px",

    width: "20px",
    height: "20px",

    cursor: "pointer",
  }

  const ScrollLeftButtonStyle = {
    color: "black",

    background: "white",

    borderRadius: "100px",
    border: "1px solid #DBDBDB",

    position: "absolute",

    right: "10px",
    top: "43px",

    width: "20px",
    height: "20px",

    cursor: "pointer",
  }

  const StoryWrapper = styled.div`
  display: flex;
  gap: 17px;

  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;

  object-fit: cover;

  padding:0px 20px;`

  const SugestionTitle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 316px;

  color: black;
  font-weight: bolder;

  font-size: 14px;`

export function HomePage() {

  const carousel = useRef(null)
  const [showElement, setShowElement] = useState(false) 

  const handleRightScroll = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 470;
    if(carousel.current.scrollLeft >= 0){
      setShowElement(true)
    }
  }
  
  const handleLeftScroll = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 470;
    if(carousel.current.scrollLeft <= 470){
      setShowElement(false)
    }
  }

  return (
    <Body>
    <GlobalResetStyle/>
    <Header currentuser={'../../assets/gatopc.jpg'}/>
    <RightContainer>
      <CurrentUser currentuser={'oliveira.dftp'} currentusername={'Gabriel Oliveira'} currentuserimg={'../../assets/gatopc.jpg'}/>
      <SugestionTitle>
        <p>Sugestões para você</p>
        <p>Ver tudo</p>
      </SugestionTitle>
      <Sugestion sugestionuser={'random1.user'} followedby={'ana, carlos'} sugestionuserimg={'https://picsum.photos/49/51'}/>
      <Sugestion sugestionuser={'random2.user'} followedby={'neymar, rodrigo'} sugestionuserimg={'https://picsum.photos/44/56'}/>
      <Sugestion sugestionuser={'random4.user'} followedby={'diego, joao'} sugestionuserimg={'https://picsum.photos/45/59'}/>
      
    </RightContainer>
    <MidContainer>
      <StorysContainer>
        <StoryWrapper ref={carousel}>
          <Story  storyUserName={'emile'} storyuserimage={''}/>
          <Story  storyUserName={'gabriel'} storyuserimage={''}/>
          <Story  storyUserName={'joao'} storyuserimage={''}/>
          <Story  storyUserName={'neymar'} storyuserimage={''}/>
          <Story  storyUserName={'carlos'} storyuserimage={''}/>
          <Story  storyUserName={'adriana'} storyuserimage={''}/>
          <Story  storyUserName={'marcos'} storyuserimage={''}/>
          <Story  storyUserName={'josé'} storyuserimage={''}/>
          <Story  storyUserName={'junior'} storyuserimage={''}/>
          <Story  storyUserName={'john'} storyuserimage={''}/>
          <Story  storyUserName={'Doe'} storyuserimage={''}/>
          <Story  storyUserName={'Ana'} storyuserimage={''}/>
          <Story  storyUserName={'michael'} storyuserimage={''}/>
          <Story  storyUserName={'motta'} storyuserimage={''}/>
        </StoryWrapper>
        <UilAngleRightB style={ScrollLeftButtonStyle} onClick={handleRightScroll}/>
        { showElement ? <UilAngleLeftB style={ScrollRightButtonStyle} onClick={handleLeftScroll}/> : null}
      </StorysContainer>
      <Publication pubuserimage={'../../assets/astras.png'} pubusername={'gabriel '} text={'Hello'} pubimage={"../../assets/astras.png"}/> 
      <Publication pubuserimage={'../../assets/gatotriste.jpg'} pubusername={'emile '}  text={'Good Night'} pubimage={"../../assets/gatotriste.jpg"}/> 
      <Publication pubuserimage={'../../assets/gatopc.jpg'} pubusername={'joao '} text={'Happy new Year'} pubimage={"../../assets/gatopc.jpg"}/> 
      <Publication pubuserimage={'../../assets/letsgo.png'} pubusername={'carlos '} text={'lorem ipsun lorem'} pubimage={"../../assets/letsgo.png"}/> 
      <Publication pubuserimage={'../../assets/macacodeitado.jpg'} pubusername={'neymar '} text={'Lets Go'} pubimage={"../../assets/macacodeitado.jpg"}/> 
    </MidContainer>
    </Body>
  )
}

