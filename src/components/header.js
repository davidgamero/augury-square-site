import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AuguryMark from "../assets/as-icon-large.svg"
import styled from "styled-components"

const Div = styled.div`
@media (max-width: 600px){
  margin: 20px 40px;
};
@media (min-width: 600px){
  margin: 20px 100px;
};
padding: 0px 20px;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <Div>
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

    </Div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
