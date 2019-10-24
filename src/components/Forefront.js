import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 70vh;
  background-color: black;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H3 = styled.h3`
  font-size: 30px;
  color: white;
  font-weight: 500;
`

const H1 = styled.h1`
  font-size: 68px;
  color: white;
`

export default function Forefront() {
  return (
    <Div>
      <H3>At the forefront of:</H3>
      <H1>Fintech</H1>
      <H1>Healthtech</H1>
      <H1>Media</H1>
      <H1>Life</H1>
    </Div>
  )
}