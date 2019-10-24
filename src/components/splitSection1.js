import React from "react"

import Layout from "./layout"
import { StaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'

import Img from "gatsby-image"

const TextDiv = styled.div`
  @media (max-width: 600px){
    padding: 5vh 0vh;
    height: auto
  };
  @media (min-width: 600px){
    display: inline-block;
    padding: 4vh 4vh;
    vertical-align: top;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};;
`;

const ImgDiv = styled.div`
  @media (max-width: 600px){
    height: 50%;
  };
  @media (min-width: 600px){
    display: inline-block;
    vertical-align:top;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};;
  
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 2rem;
  letterSpacing: 1px;
  text-align: justify;
  /* overwriting because i don't know the theming stuff */
  color: ${props => props.theme.primary};
  color: black;
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  font-size: 1.5rem;
  line-height: 3rem;
  color: black;
`;

const Container = styled.div`
  @media (max-width: 600px){
    height: auto
  };
  @media (min-width: 600px){
    height: 100vh;
  };
  padding: 10% 8vh;
  width: auto;
`;

const SplitSection1 = ({ theme, className, title, subTitle }) => {
  console.log('Theme is: ', theme)
  return (
    <StaticQuery
      query={graphql`
      query {
        innovator: file(relativePath: { eq: "side-view-innovator.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
      render={data => {
        // Set ImageData.
        const imageData = data.innovator.childImageSharp.fluid
        return (
          <ThemeProvider theme={theme}>
            <Container>
              <ImgDiv>
                <Img fluid={imageData}
                  objectFit="contain"
                  style={{ height: '100%' }} />
              </ImgDiv>
              <TextDiv>
                <H1>
                  {title}
                </H1>
                <SubTitle>
                  {subTitle}
                </SubTitle>
              </TextDiv >
            </Container>
          </ThemeProvider >
        )
      }}
    />
  )

}

export default SplitSection1;