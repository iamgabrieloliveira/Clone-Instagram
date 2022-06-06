import React from "react";
import styled from 'styled-components'

const ImagesGalery = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
`

const Image = styled.div`
  width: 300px;
  height: 300px;
  background: black;
  cursor: pointer;

  background-size: 300px;
  background-position: center;
`
export function UserPublications(props) {
  return (
    <ImagesGalery>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
      <Image style={{backgroundImage: `url(${props.pubImage})`}}></Image>
    </ImagesGalery>
  )
}