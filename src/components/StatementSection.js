import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: black;
  @media (max-width: 425px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  height: auto;
  padding: 10vh 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const H1 = styled.h1`
  font-size: 64px;
  color: white;
  font-family: Domine;
`
const P = styled.p`
  font-size: 24px;
  color: white;
  font-family: Roboto;
  
  @media (max-width: 425px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`

export default function StatementSection({ title, subTitle }) {
  return (
    <Div>
      <H1>{title}:</H1>
      <P>{subTitle}</P>
    </Div>
  )
}