import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useContext } from 'react';
import AuguryMark from "./auguryMark"
import styled, { ThemeContext } from "styled-components"

const Div = styled.div`
@media (max-width: 600px){
  padding: 20px 40px;
};
@media (min-width: 600px){
  padding: 20px 100px;
};
padding: 0px 20px;
`;

const Header = ({ siteTitle }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <header
      style={{
        background: themeContext.background,
        marginBottom: `1.45rem`,
      }}
    >
      <Div>
        <AuguryMark size="60" fill={themeContext.primary} />
        <div style={{
          float: `right`,
          color: themeContext.primary,
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
