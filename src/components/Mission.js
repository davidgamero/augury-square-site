import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: black;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`
const H1 = styled.h1`
  font-size: 64px;
  color: white;
`
const P = styled.p`
  font-size: 24px;
  color: white;
`

export default function Mission() {
  return (
    <Div>
      <H1>Mission:</H1>
      <P>Unleash full potential of people through an interactive approach to living, working, technology.</P>
    </Div>
  )
}