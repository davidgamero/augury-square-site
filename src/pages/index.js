import React from "react"

import { ThemeProvider } from 'styled-components'
import ReactPageScroller from "react-page-scroller"
import HomeSection from "../components/homeSection"
import InfoSection from "../components/infoSection"
import light from "../themes/light"
import Layout from "../components/layout"
import SplitSection2 from "../components/splitSection2"
import TunnelPic from "../components/tunnelPic"

const IndexPage = ({ className }) =>
  (
    <div>
      <HomeSection />
      <InfoSection
        theme={light}
        title="A place unlike anywhere you've built before."
        subTitle="Augury Square is a tokenized, mixed-use real estate development built on 30 acres of shared workspace, offices, retail, parks, and residential providing state-of-the-art  technologies including Blockchain, IoT, and AI for the community of entrepeneurs, developers, enthusiasts and users to apply for building in a seamlessly integrated lifestyle." />
      <SplitSection2
        theme={light}
        title="The Environment for Innovators"
        subTitle="The Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next generation business hub and incubator that accelerates ideas into existence. Augury Square automates all of the day to day tasks and todos allowing you focus on what maters most." />
      <TunnelPic />
    </div >
  )

export default IndexPage
