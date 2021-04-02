import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import { postPreview } from './BlogRoll.module.css'

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
            subtitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }  
  `)

  const { nodes } = data.allMarkdownRemark
  return (
      <div>
          {
              nodes
               ? nodes.map(({frontmatter}) => {
                  return(
                      <div 
                        key={frontmatter.title} 
                        className={postPreview}
                      >
                          <h3><Link to={frontmatter.slug}>{frontmatter.title}</Link></h3>
                          <p>{frontmatter.date}</p>
                          <p>{frontmatter.subtitle}</p>
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
