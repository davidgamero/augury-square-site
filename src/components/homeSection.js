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
import StatementSection from './StatementSection'
import HumanCentered from './split-img-left/HumanCentered'
import Economics from './Economics'
import ImageSection from './imageSection'
import TestingGround from './TestingGround'
import Forefront from './Forefront'
import Team from './team/Team'

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

                <StatementSection
                  title="Mission"
                  subTitle="Unleash full potential of people through an interactive approach to living, working, technology."
                />

                <HumanCentered 
                  theme={themeContext}
                  title="Human centered innovation relevant to your lifestyle"
                  subTitle="Innovation isn’t only for enterprise. It’s for people to. A human centered approach to lifestyle makes for a living experience truly unforgettable making everyday amazing for you and your peers. Augury Square accelerates you to gain your goals helping you achieve them making your neighborhood a launcpad for your life."
                />

                <StatementSection 
                  title="About"
                  subTitle="Augury Square is about collaborating through a culture, complimentary to your skillsets, interest and expertise connected by a community of doers."
                />

                {/* Insert image section here */}
                <ImageSection />

                <StatementSection
                  title="Goal"
                  subTitle="Augury Square’s aims to bring individuals full circle. From personal to professional provide the catalyst for the most innovative minds to make most out of life every step of the way."
                />

                <Economics 
                  theme={themeContext}
                  title="Economics of interacting"
                  subTitle="Augury encourages Interacting with individuals, to collaborate wih the people in the community. Our tokenized enviornment allows you to redeem value relevant to you for communicating, connecting and collaborating. Spend your tokens on business, work life or play."
                />

                <TestingGround />

                <Forefront />

                {/* Having trouble finding a programmatic way to load the images */}
                {/* <Team /> */}

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
