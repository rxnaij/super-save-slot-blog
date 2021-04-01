import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { headerWrapper } from './Header.module.css'

const Header = ({ siteTitle }) => (
  <header className={headerWrapper}>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Link to="/blog">Blog</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
