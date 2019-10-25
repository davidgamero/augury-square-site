import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'

import Img from "gatsby-image"

const TextDiv = styled.div`
  @media (max-width: 600px){
    padding: 5vh 0vh;
    height: auto
  };
  @media (min-width: 600px){
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
  };
  color: ${props => props.theme.primary};
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
  /* overwriting because i don't know the theming stuff */
  color: ${props => props.theme.primary};
  color: black;
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: 500;
  display: inline;
  width: 100%;
  font-size: 3.5rem;
  line-height: 4.5rem;
  color: black;
  @media (max-width: 425px) {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`;

const Container = styled.div`
  @media (max-width: 600px){
    height: auto
  };
  @media (min-width: 600px){
    height: 100vh;
    display: flex;
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
        innovator: file(relativePath: { eq: "collaboration.jpg" }) {
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