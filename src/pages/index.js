import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'
import HomeSummaryBox from "../components/homeSummaryBox";

const Div = styled.div`
  margin: auto;
  height: 100%;
`;

const BackgroundSection = ({ className }) =>
  (
    <Div>
      <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-cropped.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
          // Set ImageData.
          const imageData = data.desktop.childImageSharp.fluid
          return (
            <BackgroundImage
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={`#000`}
            >
              <Layout>
                <SEO title="Augury Square" />
                <HomeSummaryBox />

              </Layout >
            </BackgroundImage>
          )
        }}
      />
    </Div>
  )

const IndexPage = styled(BackgroundSection)`
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
`

export default IndexPage
