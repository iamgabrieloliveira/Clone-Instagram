import React from "react"
import { Header } from "../../components/header"
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { CurrentProfileHeader } from "../../components/currentProfileHeader"
import { UserPublications } from "../../components/userPublications"

const ResetGlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`


export function UserPage() {
  return (
    <Body>
    <ResetGlobalStyle/>
    <Header currentuser={'../../assets/gatopc.jpg'} />
    <CurrentProfileHeader currentuser={'../../assets/gatopc.jpg'} storyimg={'../../assets/gatopc.jpg'}/>
    <UserPublications pubImage={'../../assets/gatopc.jpg'}/>
    </Body>
  )

  
}