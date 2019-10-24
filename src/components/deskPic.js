import React from "react"

import Layout from "./layout"
import { StaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'

import Img from "gatsby-image"

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

const ImgDiv = styled.div`
  color: ${props => props.theme.primary};;
  height: 100%;
`;

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

const deskPic = (props) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        innovator: file(relativePath: { eq: "office.jpg" }) {
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
          <Container>
            <ImgDiv>
              <Img fluid={imageData}
                objectFit="contain"
                style={{ height: '100%' }} />
            </ImgDiv>
          </Container>
        )
      }}
    />
  )

}

export default deskPic;
