import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const TextDiv = styled.div`
  @media (max-width: 600px){
    padding: 40px 20px;
  };
  @media (min-width: 600px){
    display: inline-block;
    padding: 4vh 4vh;
    vertical-align: top;
    width: 50%;
  };
  color: ${props => props.theme.primary};;
  height: 100%;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 2rem;
  letterSpacing: 1px;
  text-align: justify;
  color: ${props => props.theme.primary};
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  @media (min-width: 600px){
    font-size: 1.5rem;
    line-height: 3rem;
  };
  @media (max-width: 600px){
    font-size: 1rem;
    line-height: 1.5rem;
  };
`;

const Container = styled.div`
  height: 100vh;
  padding: 10% 8vh;
  width: auto;
`;

const Split2TextDiv = (props) => {
  return (
    <TextDiv>
      <H1>
        {props.title}
      </H1>
      <SubTitle>
        {props.subTitle}
      </SubTitle>
    </TextDiv>
  )
}

export {
  Split2TextDiv,
  H1,
  SubTitle
}