import React from "react"
import { useContext } from 'react';
import { Link, StaticQuery } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import BackgroundImage from 'gatsby-background-image'

import styled, { ThemeContext } from 'styled-components'
import HomeSummaryBox from "./homeSummaryBox";

const Home = ({ className }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-cropped.png" }) {
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
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={themeContext.background}
          >
            <Layout>
              <SEO title="Augury Square" />
              <HomeSummaryBox />

            </Layout >
          </BackgroundImage>
        )
      }}
    />
  )
}

const HomeSection = styled(Home)`
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
  height: 100%;
`

export default HomeSection
