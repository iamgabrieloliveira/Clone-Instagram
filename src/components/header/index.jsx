import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import { AddPubModal } from '../addPubModal'

import { UilSearch, 
  UilEstate, 
  UilComment, 
  UilPlusCircle, 
  UilCompass, 
  UilHeart,
  UilTimes,
  UilUserCircle,
  UilBookmark,
  UilSetting,
  UilRedo
 }
  from '@iconscout/react-unicons'

const Wrapper = styled.header`
    width: 100%;
    height: 60px;

    background: white;

    padding: 12px 0px;
    
    border-bottom: 1px solid #DBDBDB;

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

    cursor: pointer;
  `

  const HeaderInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    input{
      font-size: 16px;

      height: 36px;
      width: 240px;
      
      color: #white;
    
      background: #EFEFEF;
    
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
    color: "black",
    width: "27px",
    height: "27px",
    cursor: "pointer",
  }

  const CurrentUserImageHeader = styled.div`
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 15px;
    background-size: 30px;
    cursor: pointer;
  `

  const UserDropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

  const UserDropDownRoot = styled.div`
    width: 230px;
    height: 185px;
    background: white;
    box-shadow: 0 0 5px 1px rgb(0, 0, 0, .09);
    border-radius: 6px;
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-right: 170px;
  `
  const UserDropDownItem = styled.div`
    width: 100%;
    height: 37px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 15px;
    h3{
    color: black;
    font-size: 14px;
    font-weight: bolder;
    }
    &:hover{
      background: rgb(0, 0, 0, .09);
    }

    `
  const UserDropDownIcon = {
    width: "20px",
    height: "20px",
    color: "black"
  }
    
  const UserDropDownTriangle = styled.div`
    position: absolute;
    top: -5px;
    z-index: 1;
    right: 23px;
    width: 14px;
    box-shadow: 0 0 5px 1px rgb(0, 0, 0, .09);
    height: 14px;
    background: white;
    transform: rotate(45deg);
  `
  const UserDropDownOverlay = styled.div`
    position: fixed;  
    inset: 0;
    `
  const UserDropDownContent = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1000;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
  `
  const UserDropDownHardLineStyle = {
    width: "100%",
    background: "#DBDBDB",
    position: "absolute",
    top: "148px",
    height: '1px',
    border: 'none',
    zIndex: "10000",
  }
  
  const UserDropDownExit = styled.h3`
    color: black;
    font-size: 14px;
    margin-top: 17px;
    margin-left: 19px;
    cursor: pointer;
  `



export function Header(props) {

  const [UserDropDown, setUserDropDown] = useState(false)

  const fnUserDropDown = () => {
    if(UserDropDown){
      setUserDropDown(false)
    }else{
      setUserDropDown(true)
    }
  }

  const [ModalVisibility, setModalVisibility] = useState(false)

  window.onkeydown = (e) => {
    if(ModalVisibility && e.key ){
      setModalVisibility(false)
      document.body.style.overflow = "auto"
    }
  }

  function ShowModal(){
    if(ModalVisibility){
      setModalVisibility(false)
      document.body.style.overflow = "auto"
    }else{
      setModalVisibility(true)  
      document.body.style.overflow = "hidden"
    }
    
  }


  return (
    <Wrapper>
    { ModalVisibility ? <><AddPubModal/> <UilTimes style={{
      position: "absolute",
      top: 5,
      right: 5,
      zIndex: 10000,
      width: "35px",
      height: "35px",
      color: "white",
      cursor: "pointer",
    }}
      onClick={ShowModal}
    /> </>: null }
    <HeaderContainer>
    <InstagramLogo 
    src="../assets/instagram-logo.png"
    onClick={function Reload(){
      window.location.reload()
    }}
     /> 
    <HeaderInputContainer >
      <UilSearch style={{color: "#8E8E8E",width: "16px",position: "relative",left: "30px"}}/>
      <input type="text" placeholder='Pesquisar'/>
    </HeaderInputContainer>
    <HeaderIconsContainer>
     <Link to="/home"> <UilEstate style={HeaderIconsStyle} /></Link>
      <UilComment style={HeaderIconsStyle} />
      <UilPlusCircle
       style={HeaderIconsStyle}
       onClick={ShowModal}
        />
      <UilCompass style={HeaderIconsStyle} />
      <UilHeart style={HeaderIconsStyle} />
      <UserDropDownContainer>
          <CurrentUserImageHeader 
            style={{
              backgroundImage: `url(${props.currentuser})`}}
              onClick={fnUserDropDown}>
          </CurrentUserImageHeader>
        {UserDropDown &&
          <UserDropDownRoot> 
            <UserDropDownOverlay 
            onClick={fnUserDropDown}></UserDropDownOverlay>
            <UserDropDownTriangle></UserDropDownTriangle>
          <UserDropDownContent>
            <Link 
            to="/profile" 
            style={{textDecoration: "none"}}>
            <UserDropDownItem>
              <UilUserCircle style={UserDropDownIcon}/>
              <h3>Perfil</h3>
            </UserDropDownItem>
            </Link>
            <UserDropDownItem>
              <UilBookmark style={UserDropDownIcon}/> 
              <h3>Salvos</h3>
            </UserDropDownItem>
            <UserDropDownItem>
              <UilSetting style={UserDropDownIcon}/>
              <h3>Configurações</h3>
            </UserDropDownItem>
            <UserDropDownItem>
              <UilRedo style={UserDropDownIcon}/>
              <h3>Trocar de conta</h3>
            </UserDropDownItem>
            <Link to='/' style={{textDecoration: "none"}}><UserDropDownItem>
            <UserDropDownExit style={{marginBottom: "14px"}}>Sair</UserDropDownExit>
            </UserDropDownItem>
            </Link>
          </UserDropDownContent>
            <hr style={UserDropDownHardLineStyle}/>
      
        </UserDropDownRoot>
          }
      </UserDropDownContainer>
    </HeaderIconsContainer>
    </HeaderContainer>
  </Wrapper>
  )
} 