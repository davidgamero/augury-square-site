import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import Img from "gatsby-image"
import { H1, SubTitle } from "./split"


const TextDiv = styled.div`
  @media (max-width: 600px){
    padding: 5vh 10vh;
    height: auto
  };
  @media (min-width: 600px){
    display: inline-block;
    padding: 25vh 10vh;
    vertical-align: center;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};;
`;

const ImgDiv = styled.div`
  @media (max-width: 600px){
    height: 40vh
  };
  @media (min-width: 600px){
    display: inline-block;
    vertical-align:top;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};
  
`;

const Container = styled.div`
  @media (max-width: 600px){
    height: auto
  };
  @media (min-width: 600px){
    height: 100vh;
  };
  width: auto;
`;

const SplitSection2 = ({ theme, className, title, subTitle }) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        innovator: file(relativePath: { eq: "mouse.jpg" }) {
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
              <TextDiv>
                <H1>
                  {title}
                </H1>
                <SubTitle>
                  {subTitle}
                </SubTitle>
              </TextDiv>
              <ImgDiv>
                <Img fluid={imageData}
                  objectFit="contain"
                  style={{ height: '100%' }} />
              </ImgDiv>
            </Container>
          </ThemeProvider >
        )
      }}
    />
  )

}

export default SplitSection2;
