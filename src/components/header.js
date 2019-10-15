import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AuguryMark from "../assets/as-icon-large.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <AuguryMark width="60" />
      <div style={{
        float: `right`,
        color: `white`,
        fontFamily: `Roboto`,
        fontWeight: `Bold`,
      }}
      >
        <h5>
          Innovate Collaborate Connect
        </h5>

      </div>

    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
