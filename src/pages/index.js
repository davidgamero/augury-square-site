import React from "react"

import ReactPageScroller from "react-page-scroller"
import HomeSection from "../components/homeSection"
import InfoSection from "../components/infoSection"
import light from "../themes/light"
import dark from "../themes/dark"
import SplitSection1 from "../components/splitSection1"
import TunnelPic from "../components/tunnelPic"
import SplitSection2 from "../components/splitSection2"
import BannerSection from "../components/bannerSection"

const IndexPage = ({ className }) => {
  return (
    <div>
      <HomeSection />
      <InfoSection
        theme={light}
        title="A place unlike anywhere you've built before."
        subTitle="Augury Square is a tokenized, mixed-use real estate development built on 30 acres of shared workspace, offices, retail, parks, and residential providing state-of-the-art  technologies including Blockchain, IoT, and AI for the community of entrepeneurs, developers, enthusiasts and users to apply for building in a seamlessly integrated lifestyle."
      />
      <SplitSection1
        theme={light}
        title="The Environment for Innovators"
        subTitle="The Augury Square is a community where innovators collaborate and connect solutions that matter to the masses. A next generation business hub and incubator that accelerates ideas into existence. Augury Square automates all of the day to day tasks and todos allowing you focus on what maters most."
      />
      <TunnelPic />
      <SplitSection2
        theme={light}
        title="Collaborative at the Core"
        subTitle="Environments are only as amazing as the individuals inside them. Individuals of Augury Square encompass a wide array of unique qualities. They understand that great products start with people more than just top tier professionals, a diverse assortment of innovative minds enabling amazing ideas to impact everyone."
      />
      <BannerSection
        theme={dark}
        title="Mission:"
        subTitle="Unleash full potential of people through an interactive approach to living, working and technology." />
    </div >
  )
}

export default IndexPage
