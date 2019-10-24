import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

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

const deskPic = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          innovator: file(relativePath: { eq: "food-market.jpg" }) {
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
