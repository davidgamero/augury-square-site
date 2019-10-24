/**
 * The long section split between "About" and "Goal"
 * statement sections.
 */
import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Div = styled.div``
const SplitDiv = styled.div``


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

const Img = ({ path }) => {
  // let gql;
  // switch (path) {
  //   case path !== false:
  //     gql = graphql`
  //     query {
  //       img: file(relativePath: { eq: "office.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  //     break;
  
  //   default:
  //     break;
  // }
  const gql = graphql`
      query {
        img: file(relativePath: { eq: "office.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    ` 
  const gql2 = graphql`
      query {
        img: file(relativePath: { eq: "hallway.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    ` 

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
    render={data => (
      <Container>
        <ImgDiv>
          <Img fluid={data.img.childImageSharp.fluid}
            objectFit="contain"
            style={{ height: '100%' }}
          />
        </ImgDiv>
      </Container>
    )}
  />
)
  }

export default function ImageSection() {
  return (
    <Div>
      <Img path="office.jpg" />
    </Div>
  )
}