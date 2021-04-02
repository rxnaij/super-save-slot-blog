import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { head, date } from './BlogTemplate.module.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
        <div className="blog-post-container">
            <div className="blog-post">
              <div className={head}>
                <h1>{frontmatter.title}</h1>
                <p className="subtitle">{frontmatter.subtitle}</p>
                <p className={date}>{frontmatter.date}</p>
              </div>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
        </div>
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