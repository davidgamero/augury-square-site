import React from 'react'
import styled from 'styled-components'
import { teamRows, partners, advisors, experts } from './content'

const Div = styled.div`
  padding: 0 20vh;
  @media (max-width: 425px) {
    padding: 0 20px;
  }
`

const Header = styled.div`
  padding-top: 100px;
  margin: 0 5vh;
  bottom-border: solid 1px rgba(0, 0, 0, 0.5);
  @media (max-width: 425px) {
    margin: 0;
  }
`

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`
const H2 = styled.h1`
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.2rem;

  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: .85rem;
    line-height: 1rem;
  }
`

const Row = styled.div`
  display: flex;
`
const Img = styled.div`
 width: 30%;
 max-width: 20vh;
  @media (max-width: 425px) {
    width: 40%;
    display: block;
    justify-content: center;
    align-items: center;
  }
`
const Bio = styled.div`
  width: 50%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  
  @media(max-width: 425px) {
    width: 80%;
  }
`
const BioHeader = styled.div`
  padding: 20px;
  @media (max-width: 425px) {
    padding: 10px;
  }
`
const BioDescription = styled.div`
  padding: 0 20px;
  @media (max-width: 425px) {
    padding: 10px;
  }
`


export default function Team() {
  return (
    <Div>
      <Header>
        <H1>Management and Operations</H1>
        <H3>Our hand-picked industry experts and seasoned entrepeneurs</H3>
      </Header>
      {teamRows.map(TeamMember)}

      <Header>
        <H1>Partners</H1>
        <H3>Our strategic partners with track records of success </H3>
      </Header>
      {partners.map(TeamMember)}

      <Header>
        <H1>Advisors</H1>
      </Header>
      {advisors.map(TeamMember)}

      <Header>
        <H1>Industry Experts</H1>
        <H3>World-class experts with deep domain expertise</H3>
      </Header>
      {experts.map(TeamMember)}

      <div style={{ paddingTop: '100px' }}>&nbsp;</div>
    </Div>
  )
}

//---- extended styles for now because they don't play well on mobile
const BioH2 = styled(H2)`
  @media (max-width: 425px) {
    margin: 0;
  }
`
const BioH5 = styled(H5)`
  @media (max-width: 425px) {
    margin: 0;
  }
`
const BioH3 = styled(H3)`
  font-size: 1rem;
  line-height: 2rem;
  @media (max-width: 425px) {
    line-height: 1rem;
  }
`
const BioImg = styled.img`
`

// this should be the struct of each item exported in content.js
const TeamMember = ({
  name,
  title,
  imgPath,
  bio
}) => (
    <Row>
      <Img>
        {/* <TeamMember member="suresh" /> */}
        <BioImg src={imgPath} />
      </Img>
      <Bio>
        <BioHeader>
          <BioH2>{name}</BioH2>
          <BioH5>{title}</BioH5>
        </BioHeader>
        <BioDescription>
          <BioH3>{bio}</BioH3>
        </BioDescription>
      </Bio>
    </Row>
  )