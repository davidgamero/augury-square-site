import React from "react"

import ReactPageScroller from "react-page-scroller"
import HomeSection from "../components/homeSection"

// ---- NOTE: sections should go here but didn't feel like moving the theme
// context to the index page yet. homepage sections are within the home section.

const IndexPage = ({ className }) => {
  return (
    <div>
      <HomeSection />
    </div >
  )
}

export default IndexPage
