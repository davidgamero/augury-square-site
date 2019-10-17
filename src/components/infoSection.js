import React from "react"
import { useContext } from 'react';
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled, { ThemeProvider } from 'styled-components'
import HomeSummaryBox from "../components/homeSummaryBox";

const Div = styled.div`
  @media (max-width: 600px){
    margin: 40px;
  };
  @media (min-width: 600px){
    margin: 100px;
  };
  border-color: ${props => props.theme.primary};
  @media (min-width: 600px){
    border-width: 0px 1px 1px 0px;
  };
  @media (max-width: 600px){
    border-width: 0px;
  };
  border-style: solid;
  margin-bottom: 1.45rem;
  color: ${props => props.theme.primary};;
  padding: 20px;
  height: 100%;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 20px;
  letterSpacing: 1px;
  color: ${props => props.theme.primary};
`;

const TagLineText = styled.p`
  margin-top: 100px;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${props => props.theme.primary};;
`;

const H1 = styled.div`
  font-size: 50px;
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  line-height: 50px;
`;

const InfoSection = ({ theme, className, title, subTitle, tagline }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
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
      </Layout >
    </ThemeProvider>
  )
}

export default InfoSection;
