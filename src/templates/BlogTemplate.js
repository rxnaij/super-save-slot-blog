import React from "react"
import { graphql, Link } from "gatsby"

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { 
  head, 
  date,
  content
} from './BlogTemplate.module.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section>
        <nav>
          <Link to="/">&larr; Back to home page</Link>
        </nav>
      </section>
      <section className="blog-post-container">
          <div className="blog-post">
            <div className={head}>
              <h1>{frontmatter.title}</h1>
              <p className="subtitle">{frontmatter.subtitle}</p>
              <p className={date}>{frontmatter.date}</p>
            </div>
            <div
              className={content}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
      }
    }
  }
`