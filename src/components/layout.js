/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Div = styled.div`
@media (min-width: 600px){
  height: 100vh;
};
@media (max-width: 600px){
  height: auto;
};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <Div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </Div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
