import React from "react"
import { useContext } from 'react';
import { StaticQuery, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import BackgroundImage from 'gatsby-background-image'

import styled, { ThemeContext } from 'styled-components'
import HomeSummaryBox from "./homeSummaryBox"

import APlaceSection from './a-place-section/APlaceSection'
import SplitSection1 from './splitSection1'
import TunnelPic from './TunnelPic'
import Collaborative from './split-img-right/Collaborative'
import Mission from './Mission'
import HumanCentered from './split-img-left/HumanCentered'

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

              {/* 
                This should be in the index page section, 
                which is where the theme context should be passed down.
                but this works for now.  
              */}
                <APlaceSection />

                <SplitSection1 
                  theme={themeContext}
                  title="The environment for innovators"
                  subTitle="The Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next generation business hub and incubator that accelerates ideas into existance. Augury Square automates all of the day to day tasks and todos allowing you focus on what maters most."
                />

                <TunnelPic />

                <Collaborative 
                  theme={themeContext}
                  title="Collaborative at the core"
                  subTitle="Enviornments are only as amazing as the individuals inside them. Individuals of Augury Square  encompase a wide array of unique qualities. They understand that great products start with people, more than just top tier professionals, a diverse assortment of innovative minds enabling amazing ideas to impact everyone together."
                />

                <Mission />

                <HumanCentered 
                  theme={themeContext}
                  title="Human centered innovation relevant to your lifestyle"
                  subTitle="Innovation isn’t only for enterprise. It’s for people to. A human centered approach to lifestyle makes for a living experience truly unforgettable making everyday amazing for you and your peers. Augury Square accelerates you to gain your goals helping you achieve them making your neighborhood a launcpad for your life."
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
