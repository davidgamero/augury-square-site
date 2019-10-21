import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled, { ThemeProvider } from 'styled-components'

const Div = styled.div`
  @media (max-width: 600px){
    margin: 30px;
    height: auto;
  };
  @media (min-width: 600px){
    margin: 100px;
    height: 100%
  };
  border-color: ${props => props.theme.primary};
  margin-bottom: 1.45rem;
  color: ${props => props.theme.primary};;
  padding: 20px;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 20px;
  letterSpacing: 1px;
  color: ${props => props.theme.primary};
  line-height: 2rem;
`;

const TagLineText = styled.p`
  @media (min-width: 600px){
    margin-top: 100px;
  };
  @media (max-width: 600px){
    margin-top: 10vh;
  };
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${props => props.theme.primary};;
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  @media (min-width: 600px){
    font-size: 3rem;
    line-height: 4rem;
  };
  @media (max-width: 600px){
    font-size: 2rem;
    line-height: 3rem;
  };
`;

const InfoSection = ({ theme, className, title, subTitle, tagline }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} />
      <Div>
        <H1>
          {title}
        </H1>
        <SubTitle>
          {subTitle}
        </SubTitle>
        <TagLineText>
          {tagline}
        </TagLineText>
      </Div >
    </ThemeProvider>
  )
}

export default InfoSection;
