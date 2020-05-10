import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer.js"

import Header from "./header"

const Layout = ({ children }) => {

  const CURRENT_PATH = window.location.pathname

  return (
    <>
      <Header currentPath={CURRENT_PATH} />
      <div
        style={{
          margin: `0 auto`,
          // padding: `6.45rem 1.0875rem 1.45rem`,
          // padding: `5rem 1.0875rem 1.45rem`,
          padding: `5rem 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
        {/* <div className={`header__menu__dropdown header__menu__dropdown--active`}>
          <ul>
              <li>
                  Comics
              </li>
              <li>
                  Foster
              </li>
              <li>
                  About
              </li>
          </ul>
      </div> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
