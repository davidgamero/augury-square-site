import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

/* this will layer over the image */
  background-color: white;
`

const TxtDiv = styled.div`
  width: 100%;
  border-bottom: solid .5px rgba(0, 0, 0, 0.5);
`
const HeaderDiv = styled.div`
  width: 50%;
`
const HeaderTxt = styled.h1`
  font-size: 48px;
`
const SubTxt = styled.div`
  font-size: 20px;
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