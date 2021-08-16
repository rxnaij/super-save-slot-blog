import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import PostStats from '../components/common/PostStats'

import { 
  head, 
  date,
  content
} from './BlogTemplate.module.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, wordCount } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="blog-post-container">
          <div className="blog-post">
            <div className={head}>
              <h1>{frontmatter.title}</h1>
              <p className="subtitle">{frontmatter.subtitle}</p>
              <PostStats>
                <PostStats.Group field="TIME" value={frontmatter.date} />
                <PostStats.Group field="WORDS" value={wordCount.words} />
              </PostStats>
            </div>
            <GatsbyImage
              image={getImage(frontmatter.coverphoto)}
              alt={frontmatter.title}
            />
            <div
              className={content}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
      </article>
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
        coverphoto {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
            )
          }
        }
      }
      wordCount {
        words
      }
    }
  }
`