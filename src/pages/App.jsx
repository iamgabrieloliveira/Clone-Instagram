import { UilSearch, 
  UilEstate, 
  UilComment, 
  UilPlusCircle, 
  UilCompass, 
  UilHeart, 
  UilAngleRightB, 
  UilAngleLeftB  } 
from '@iconscout/react-unicons'

import { CurrentUser } from '../components/currentUser'

import { Publication } from '../components/publication'

import { Story } from '../components/storys'

import { useRef, useState } from 'react'

import { Sugestion } from '../components/sugestion'

import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

const GlobalResetStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
  }
  `

  const Body = styled.div`
    background: black;

    padding-bottom: 50px;
  `

  const Wrapper = styled.header`
    width: 100%;
    height: 60px;

    background: black;

    padding: 12px 0px;
    
    border-bottom: 1px solid #363636;

    position: fixed;
    z-index: 1000;
  `
  const HeaderContainer = styled.div`
    width: 1000px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-around;
  `
  
  const InstagramLogo = styled.img`
    width: 110px;
  `

  const HeaderInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    input{
      font-size: 16px;

      height: 36px;
      width: 240px;
      
      color: #fff;
    
      background: #262626;
    
      border: none;
      border-radius: 8px;
    
      padding-left: 40px;
    }
    input:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  `
  const HeaderIconsContainer = styled.div`
    display: flex;
    gap: 20px;

    color: white;
  `
  const HeaderIconsStyle = {
    color: "white",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  }

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

  border: 1px solid #363636;
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
    border: "none",

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
    border: "none",

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

  color: white;
  font-weight: bolder;

  font-size: 14px;`

export function App() {

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
    <Wrapper>
      <HeaderContainer>
      <InstagramLogo src="../assets/instagram-logo.png"/> 
      <HeaderInputContainer >
        <UilSearch style={{color: "#8E8E8E",width: "16px",position: "relative",left: "30px"}}/>
        <input type="text" placeholder='Pesquisar'/>
      </HeaderInputContainer>
      <HeaderIconsContainer>
        <UilEstate style={HeaderIconsStyle} />
        <UilComment style={HeaderIconsStyle} />
        <UilPlusCircle style={HeaderIconsStyle} />
        <UilCompass style={HeaderIconsStyle} />
        <UilHeart style={HeaderIconsStyle} />
        <img src=""/>
      </HeaderIconsContainer>
      </HeaderContainer>
    </Wrapper>
    <RightContainer>
      <CurrentUser currentuser={'oliveira.dftp'} currentusername={'Gabriel Oliveira'} currentuserimg={'https://picsum.photos/42/51'}/>
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
          <Story  storyUserName={'user'} storyuserimage={'https://picsum.photos/200/300'}/>
          <Story  storyUserName={'user1'} storyuserimage={'https://picsum.photos/220/300'}/>
          <Story  storyUserName={'user2'} storyuserimage={'https://picsum.photos/230/300'}/>
          <Story  storyUserName={'user3'} storyuserimage={'https://picsum.photos/210/300'}/>
          <Story  storyUserName={'user4'} storyuserimage={'https://picsum.photos/215/300'}/>
          <Story  storyUserName={'user5'} storyuserimage={'https://picsum.photos/200/310'}/>
          <Story  storyUserName={'user6'} storyuserimage={'https://picsum.photos/200/3150'}/>
          <Story  storyUserName={'user7'} storyuserimage={'https://picsum.photos/200/350'}/>
          <Story  storyUserName={'user8'} storyuserimage={'https://picsum.photos/205/310'}/>
          <Story  storyUserName={'user9'} storyuserimage={'https://picsum.photos/210/311'}/>
          <Story  storyUserName={'user10'} storyuserimage={'https://picsum.photos/205/317'}/>
          <Story  storyUserName={'user11'} storyuserimage={'https://picsum.photos/201/311'}/>
          <Story  storyUserName={'user12'} storyuserimage={'https://picsum.photos/202/312'}/>
          <Story  storyUserName={'user13'} storyuserimage={'https://picsum.photos/204/313'}/>
        </StoryWrapper>
        <UilAngleRightB style={ScrollLeftButtonStyle} onClick={handleRightScroll}/>
        { showElement ? <UilAngleLeftB style={ScrollRightButtonStyle} onClick={handleLeftScroll}/> : null}
      </StorysContainer>
      <Publication pubuserimage={'https://picsum.photos/51/52'} pubusername={'gabriel '} text={'Eu sou lindo'} pubimage={"https://picsum.photos/504/500"}/> 
      <Publication pubuserimage={'https://picsum.photos/52/50'} pubusername={'emile '}  text={'Eu sou linda'} pubimage={"https://picsum.photos/505/500"}/> 
      <Publication pubuserimage={'https://picsum.photos/51/55'} pubusername={'sadrya '} text={'caramba'} pubimage={"https://picsum.photos/501/503"}/> 
      <Publication pubuserimage={'https://picsum.photos/59/49'} pubusername={'cadu '} text={'hehehe'} pubimage={"https://picsum.photos/501/805"}/> 
      <Publication pubuserimage={'https://picsum.photos/45/55'} pubusername={'neymar '} text={'Bom dia'} pubimage={"https://picsum.photos/502/502"}/> 
    </MidContainer>
    </Body>
  )
}

