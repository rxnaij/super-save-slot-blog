import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
    console.log(data)
    const { nodes } = data.allMarkdownRemark
    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <p>Here are all the posts.</p>
            {
                nodes ? nodes.map(({frontmatter}) => {
                    return(
                        <div key={frontmatter.title}>
                            <h3>{frontmatter.title}</h3>
                            <p>{frontmatter.date}</p>
                            <p><Link to={frontmatter.slug}>Read more &rarr;</Link></p>
                        </div>
                    )
                })
                : <p>No posts.</p>
            }
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 1000
    ) {
      nodes {
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }  
`