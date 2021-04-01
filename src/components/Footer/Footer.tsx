import React from 'react'

import { footerWrapper } from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerWrapper}>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    )
}

export default Footer
