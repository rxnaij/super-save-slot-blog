import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import { blogRoll, container, content, subtitle, details, title } from './BlogRoll.module.css'

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
            date(formatString: "MM.DD.YY")
          }
          wordCount {
            words
          }
        }
      }
    }  
  `)

  const exampleData = [
    {
      frontmatter: {
        slug: "/",
        title: "Hello, this is a sample post!",
        subtitle: "Check it out: I'm adding a sample post with sample data so I can see what the design looks like.",
        date: "March 31, 2021"
      }
    },
    {
      frontmatter: {
        slug: "/",
        title: "Hello, this is a sample post!",
        subtitle: "Check it out: I'm adding a sample post with sample data so I can see what the design looks like.",
        date: "March 31, 2021"
      }
    },
    {
      frontmatter: {
        slug: "/",
        title: "Hello, this is a sample post!",
        subtitle: "Check it out: I'm adding a sample post with sample data so I can see what the design looks like.",
        date: "March 31, 2021"
      }
    },
    {
      frontmatter: {
        slug: "/",
        title: "Hello, this is a sample post!",
        subtitle: "Check it out: I'm adding a sample post with sample data so I can see what the design looks like.",
        date: "March 31, 2021"
      }
    },
    {
      frontmatter: {
        slug: "/",
        title: "Hello, this is a sample post!",
        subtitle: "Check it out: I'm adding a sample post with sample data so I can see what the design looks like.",
        date: "March 31, 2021"
      }
    },
  ]

  const { nodes } = data.allMarkdownRemark
  return (
      <div className={blogRoll}>
          {
              nodes
               ? nodes.map(({frontmatter, wordCount}) => {
                  return(
                      <div 
                        key={frontmatter.title} 
                        className={container}
                      >
                        <div className={content}>
                          { frontmatter.img && <img src="" /> }
                          <h3><Link to={frontmatter.slug}>{frontmatter.title}</Link></h3>
                          <p className={subtitle}>{frontmatter.subtitle}</p>
                          <ul className={details}>
                            <li>
                              <span className={title}>TIME</span>
                              <span>{frontmatter.date}</span>
                            </li>
                            <li>
                              <span className={title}>WORDS</span>
                              <span>{wordCount.words}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                  )
              })
               : <p>No posts.</p>
          }
      </div>
  )
}

export default BlogRoll
