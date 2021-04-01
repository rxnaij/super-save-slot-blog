import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const BlogRoll = () => {
    const data = useStaticQuery(graphql`
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
  `)

  const { nodes } = data.allMarkdownRemark
  return (
      <div>
          {
              nodes ? nodes.map(({frontmatter}) => {
                  return(
                      <div key={frontmatter.title}>
                          <h3><Link to={frontmatter.slug}>{frontmatter.title}</Link></h3>
                          <p>{frontmatter.date}</p>
                          <p><Link to={frontmatter.slug}>Read more &rarr;</Link></p>
                      </div>
                  )
              })
              : <p>No posts.</p>
          }
      </div>
  )
}

export default BlogRoll
