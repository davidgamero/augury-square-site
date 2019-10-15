import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typist from 'react-typist';
import { isNullOrUndefined } from "util"
import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'

const BackgroundSection = ({ className }) =>
  (
    <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.png" }) {
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
              <div style={{
                margin: 50,
                borderColor: `white`,
                borderWidth: `0px 1px 1px 0px`,
                borderStyle: `solid`,
                maxWidth: `1500px`,
                maxHeight: `1000px`,
                marginBottom: `1.45rem`,
                color: `white`,
                padding: `20px`,
              }}>
                <div
                  style={{
                    alignItems: `left`,
                    display: `inline-block`,
                  }}>
                  <div
                    style={{
                      display: `inline-block`,
                      paddingTop: `150px`,
                    }}>
                    <h1 style={{
                      fontSize: `50px`,
                      fontFamily: `Domine`,
                      paddingTop: `100px`,
                      display: `inline`,
                      width: `100%`,
                      marginRight: `10px`,
                    }}>
                      Augury Square is for
                    </h1>
                  </div>
                  <div style={{ display: `inline-block` }}>
                    <h1 style={{
                      display: `inline`,
                      fontSize: `50px`,
                      fontFamily: `Domine`,
                    }}>
                      <Typist
                        avgTypingDelay="150"
                        stdTypingDelay="0.1">
                        Makers
              <Typist.Backspace count={6} delay={500} />
                        Coders
              <Typist.Backspace count={6} delay={500} />
                        Writers
              <Typist.Backspace count={7} delay={500} />
                        Doers
              <Typist.Backspace count={5} delay={500} />
                        Me
            </Typist>
                    </h1>
                  </div>
                </div>

                <p style={{
                  marginTop: `15px`,
                  fontFamily: `Roboto`,
                  fontSize: `20px`,
                  letterSpacing: `1px`,
                }}>
                  A thirty-acre, blockchain-backed, mixed-use development for technology tastemakers, innovative enthusiants, and enterprise-leading experts.
                </p>
                <p style={{
                  marginTop: `15px`,
                  fontFamily: `Roboto`,
                  fontSize: `20px`,
                  letterSpacing: `1px`,
                }}>
                  Enabling Ability. Providing Possibility.
                 </p>
                <div>
                  <p style={{
                    marginTop: `100px`,
                    fontFamily: `Roboto`,
                    fontSize: `15px`,
                    letterSpacing: `1px`,
                    color: `white`,
                  }}>
                    The environment of innovation for business, life, work, and play
                 </p>
                </div>
              </div>

            </Layout >
          </BackgroundImage>
        )
      }}
    />
  )

const IndexPage = styled(BackgroundSection)`
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
`

export default IndexPage
