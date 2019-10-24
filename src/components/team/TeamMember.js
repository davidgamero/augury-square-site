import React from "react"

import { StaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'

import Img from "gatsby-image"

const ImgDiv = styled.div`
  color: ${props => props.theme.primary};;
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
`

// painfully long map but we can't use functional template literal in graphqul strings
const gqlMap = {
  suresh: graphql`
    query {
      innovator: file(relativePath: { eq: "team/suresh.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `,
  jae: graphql`
    query {
      innovator: file(relativePath: { eq: "team/jae.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `,
  blake: graphql`
    query {
      innovator: file(relativePath: { eq: "team/blake.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `,
  david: graphql`
    query {
      innovator: file(relativePath: { eq: "team/david.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `,
  don: graphql`
    query {
      innovator: file(relativePath: { eq: "team/don.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `,
}

const deskPic = (props) => {
  console.log('Props: ', props)
  console.log(gqlMap[props.member])

  return (
    <StaticQuery
      query={gqlMap[props.member]}
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
