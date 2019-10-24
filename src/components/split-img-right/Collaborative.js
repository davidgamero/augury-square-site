import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import Img from "gatsby-image"
import { H1, SubTitle, TextDiv, ImgDiv, Container } from "../split2"

const Collaborative = ({ theme, className, title, subTitle }) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        innovator: file(relativePath: { eq: "motherboard.jpg" }) {
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

export default Collaborative;
