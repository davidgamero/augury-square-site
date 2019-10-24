import React from "react"
import { useContext } from 'react';
import { StaticQuery, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import BackgroundImage from 'gatsby-background-image'

import styled, { ThemeContext } from 'styled-components'
import HomeSummaryBox from "./homeSummaryBox"
import SplitSection1 from "./splitSection1";

const Div = styled.div`
@media (min-width: 600px){
  height: 100vh;
};
@media (max-width: 600px){
  height: auto;
};
`

const Home = ({ className }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StaticQuery
      query={graphql`
      query {
        file(relativePath: { eq: "bg-cropped.png" }) {
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
        const imageData = data.file.childImageSharp.fluid
        return (
          <Div>
            <BackgroundImage
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={themeContext.background}>
              <Layout>
                <SEO title="Augury Square" />
                <HomeSummaryBox />

                {/* Could probably put the rest of the app here but keeping it in layouts for now */}
                <SplitSection1 
                  theme={themeContext}
                  title="The environment for innovators"
                  subTitle="The Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next generation business hub and incubator that accelerates ideas into existance. Augury Square automates all of the day to day tasks and todos allowing you focus on what maters most."
                />

              </Layout>
            </BackgroundImage>
          </Div>

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
