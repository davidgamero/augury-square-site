import React from "react"

import styled, { ThemeProvider } from 'styled-components'

import ReactPageScroller from "react-page-scroller";
import HomeSection from "../components/homeSection"
import InfoSection from "../components/infoSection";

const Div = styled.div`
  margin: auto;
  height: 100%;
`;

const lightTheme = {
  primary: "black",
  background: "white",
}

const darkTheme = {
  primary: "white",
  background: "black",
}

const IndexPage = ({ className }) =>
  (
    <ThemeProvider theme={darkTheme}>
      <ReactPageScroller>
        <HomeSection />
        <InfoSection
          theme={darkTheme}
          title="Community"
          subTitle="A blockchain tokenized mixed-use real estate development"
          tagline="Developments include office and shared work and living spaces, innovation centers,  pioneering dining options and cafés,  entertainment and cinema, retail, healthy living options, parks and greenspace, and residential neighborhood." />
      </ReactPageScroller >
    </ThemeProvider>
  )

export default IndexPage
