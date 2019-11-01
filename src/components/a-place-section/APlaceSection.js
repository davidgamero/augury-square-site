import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  @media (max-width: 425px) {
    height: auto;
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
  width: 100%;
  padding: 10vh 6vh;

/* this will layer over the image */
  background-color: white;
`

const TxtDiv = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 10vh;
  border-bottom: solid .5px rgba(0, 0, 0, 0.8);
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

  @media (max-width: 425px) {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`
// emulating split2.js SubTitle var
const SubTxt = styled.div`
  margin-top: 4vh;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 2rem;
  letterSpacing: 1px;
  color: black;

`

export default function APlaceSection({ title, text }) {
  return (
    <Div>
      <TxtDiv>
        <div>
          <HeaderDiv>
            <HeaderTxt>{title}</HeaderTxt>
          </HeaderDiv>
          <SubTxt>
            {text}
          </SubTxt>
        </div>
      </TxtDiv>
    </Div>
  )
}