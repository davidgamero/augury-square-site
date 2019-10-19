import React from "react"

import { ThemeProvider } from 'styled-components'
import ReactPageScroller from "react-page-scroller"
import HomeSection from "../components/homeSection"
import InfoSection from "../components/infoSection"
import light from "../themes/light"

const IndexPage = ({ className }) =>
  (
    <div>
      <HomeSection />
      <InfoSection
        theme={light}
        title="Community"
        subTitle="A blockchain tokenized mixed-use real estate development"
        tagline="Developments include office and shared work and living spaces, innovation centers,  pioneering dining options and cafés,  entertainment and cinema, retail, healthy living options, parks and greenspace, and residential neighborhood." />
    </div >
  )

export default IndexPage
