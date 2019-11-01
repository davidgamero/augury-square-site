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
import TunnelPic from './tunnelPic'
import Collaborative from './split-img-right/Collaborative'
import StatementSection from './StatementSection'
import HumanCentered from './split-img-left/HumanCentered'
import Economics from './Economics'
import ImageSection from './imageSection'
import TestingGround from './TestingGround'
import Forefront from './Forefront'
import Team from './team/Team'
import Typeform from './Typeform'

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
                <HomeSummaryBox
                  subTitle1="A thirty-acre, blockchain-backed, mixed-use development for technology tastemakers, innovative enthusiasts, and enterprise-leading experts."
                  subTitle2="Enabling Ability. Providing Possibility."
                />
              </Layout>

            </BackgroundImage>
            {/* 
                This should be in the index page section, 
                which is where the theme context should be passed down.
                but this works for now.  
              */}

            <APlaceSection
              text="Augury Square is a tokenized, mixed-use real estate development, 30 acres in size with shared workspaces, offices, retail, park, and residential use, providing state of the art technologies including Blockchain, IOT and AI for the community of entrepreneurs, developers, enthusiasts and users to apply and build in a seamlessly integrated lifestyle."
              title="A place unlike anywhere you've built before..."
            />

            <SplitSection1
              theme={themeContext}
              title="The environment for innovators"
              subTitle="Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next-generation business hub and incubator that accelerates ideas into existence. Augury Square automates all of the day to day tasks and todos allowing you to focus on what matters most."
            />

            <TunnelPic />

            <Collaborative
              theme={themeContext}
              title="Collaborative at the core"
              subTitle="Environments are only as amazing as the individuals inside them. Individuals of Augury Square encompass a wide array of unique qualities. They understand that great products start with people, more than just top-tier professionals, a diverse assortment of innovative minds enabling amazing ideas to impact everyone together."
            />

            <StatementSection
              title="Mission"
              subTitle="Unleash the full potential of people through an interactive approach to living, working, and technology."
            />

            <HumanCentered
              theme={themeContext}
              title="Human centered innovation relevant to your lifestyle"
              subTitle="Innovation isn’t only for enterprise. It’s for people too. A human-centered approach to lifestyle makes for a truly unforgettable living experience, making every day amazing for you and your peers. Augury Square accelerates you to achieve your goals, making your neighborhood a launchpad for your life."
            />

            <StatementSection
              title="About"
              subTitle="Augury Square is about collaborating through a culture, complimentary to your skillset, interest, and expertise connected by a community of doers."
            />

            {/* Insert image section here */}
            <ImageSection />

            <StatementSection
              title="Goal"
              subTitle="Augury Square aims to bring individuals full circle. From personal to professional, providing the catalyst for innovative minds to make most out of life every step of the way."
            />

            <Economics
              theme={themeContext}
              title="Economics of interacting"
              subTitle="Augury encourages interacting with individuals and collaborating with people in the community. Our tokenized environment allows you to redeem value relevant to you for communicating, connecting and collaborating. Spend your tokens on business, work, life or play."
            />

            <TestingGround
              title="The testing ground for future"
              text="Ideas are great, but when do they become real? When you make them. Augury Square equips innovators, doers, and makers of all kinds with amenities they need to get stuff done. Making the ability to build, operate and test all kinds of innovation. Our futuristic sandbox approach allows you to pilot your project turning dreams into deliverables."
            />
            <Forefront />

            {/* Having trouble finding a programmatic way to load the images */}
            {/* <Team /> */}

            <Typeform />

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
