import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;

/* this will layer over the image */
  background-color: white;
`

const TxtDiv = styled.div`
  width: 100%;
  border-bottom: solid .5px rgba(0, 0, 0, 0.5);
`
const HeaderDiv = styled.div`
  width: 75%;
`
// this is emulating split2.js H1 var
const HeaderTxt = styled.h1`
  font-family: Domine;
  font-size: 3.5rem;
  line-height: 4.5rem;
  font-weight: 500;
`
// emulating split2.js SubTitle var
const SubTxt = styled.div`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 2rem;
  letterSpacing: 1px;
  color: black;
`

export default function APlaceSection() {
  return (
    <Div>
      <TxtDiv>
        <HeaderDiv>
          <HeaderTxt>A place unlike anywhere you've built before...</HeaderTxt>
        </HeaderDiv>
        <SubTxt>
          Augury Square is a tokenized, mixed-use real estate development, 30 ares in size with shared workspaces, offices, retail, park and residential use, providing state of the art technologies including Blockchain, IOT and AI for the community of entrepreneurs, developers, enthusiasts and users to apply and build in a seamlessly integrated lifestyle        </SubTxt>
      </TxtDiv>
    </Div>
  )
}