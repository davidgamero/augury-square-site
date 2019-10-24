import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 50vh;
  width: 100%;
  padding: 0 10%;

/* this will layer over the image */
  background-color: white;
`

const TxtDiv = styled.div`
  height: 100%;
  width: 100%;
  border-top: solid .5px rgba(0, 0, 0, 0.8);
/* need the txtDiv to expand full height, yet keep content within it centered */
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <div>
          <HeaderDiv>
            <HeaderTxt>The testing ground for future</HeaderTxt>
          </HeaderDiv>
          <SubTxt>
            Ideas are great, but when do they become real? When you make them. Augury Square equips innovators, doers and makers of all kinds with amenities they need get stuff done. Making the ability to build, operate and test all kinds of innovation. Our futuristic sandbox approach allows you to pilot your project turning dreams into deliverables.
          </SubTxt>
        </div>
      </TxtDiv>
    </Div>
  )
}