import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer.js"

import Header from "./header"

const Layout = ({location={}, children }) => {

  return (
    <>
      <Header currentPath={location.pathname} />
      <div
        style={{
          margin: `0 auto`,
          padding: `5rem 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
