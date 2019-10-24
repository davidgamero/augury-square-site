/**
 * The long section split between "About" and "Goal"
 * statement sections.
 */
import React from 'react'
import styled from 'styled-components'
import Bar from './images/bar'
import BuildingMotherBoard from './images/buildingMotherboard'
import Desk from './images/deskPic'
import Experience from './images/experience'
import SpeakingConference from './images/speakingConference'


const Div = styled.div``
const SplitDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`



const Container = styled.div`
  @media (max-width: 600px){
    height: 50vh;
  };
  @media (min-width: 600px){
    height: 100vh;
  }
  padding: 0vh;
  width: auto;
`;


export default function ImageSection() {
  return (
    <Div>
      <Desk />
      <SplitDiv>
        <Bar />
        <Experience />
      </SplitDiv>
      <SpeakingConference />
      <BuildingMotherBoard />
    </Div>
  )
}