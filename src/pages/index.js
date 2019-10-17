import React from "react"

import styled, { ThemeProvider } from 'styled-components'

import ReactPageScroller from "react-page-scroller";
import HomeSection from "./homeSection"

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
        <div>hi</div>
      </ReactPageScroller>
    </ThemeProvider>
  )

export default IndexPage
