import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import BlogRoll from '../components/BlogRoll/BlogRoll'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Super Save Slot</h1>
      <p className="subtitle">Thoughts, ramblings, and reviews of the games I've played.</p>
    </section>
    <section>
      <BlogRoll />
    </section>
  </Layout>
)

export default IndexPage
