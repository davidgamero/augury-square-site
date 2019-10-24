import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  padding: 0 50px;
`

const Header = styled.div`
  padding-top: 100px;
  margin: 0 50px;
  bottom-border: solid 1px rgba(0, 0, 0, 0.5);
`

const H1 = styled.h1`
  font-size: 30px;
`
const H2 = styled.h1`
  font-size: 25px;
`
const H3 = styled.h3`
  font-size: 20px;
`
const H5 = styled.h5`
  font-size: 16px;
`

const Row = styled.div`
  display: flex;
`
const Img = styled.div`
  width: 50%;
`
const Bio = styled.div`
  width: 50%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
`
const BioHeader = styled.div`
  padding: 20px;
`
const BioDescription = styled.div`
  padding: 0 20px;
`

const PLACEHOLDER = 'The Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next generation business hub and incubator that accelerates ideas into existance. Augury Square automates all of the day to day tasks and todos allowing you focus on what maters most.'

export default function Team() {
  return (
    <Div>
      <Header>
        <H1>Team</H1>
        <H3>A team of industry experts innovative from an assortment of expertise.</H3>
      </Header>

      <Row>
        <Img>hi</Img>
        <Bio>
          <BioHeader>
            <H2>Suresh Sharma</H2>
            <H5>CEO</H5>
          </BioHeader>
          <BioDescription>
            <H3>{PLACEHOLDER}</H3>
          </BioDescription>
        </Bio>
      </Row>
    </Div>
  )
}