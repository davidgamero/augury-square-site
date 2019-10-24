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
          <HeaderTxt>The testing ground for the future</HeaderTxt>
        </HeaderDiv>
        <SubTxt>
          Ideas are great, but when do they become real? When you make them. Augury Square equips innovators, doers and makers of all kinds with amenities they need get stuff done. Making the ability to build, operate and test all kinds of innovation. Our futuristic sandbox approach allows you to pilot your project turning dreams into deliverables.
        </SubTxt>
      </TxtDiv>
    </Div>
  )
}