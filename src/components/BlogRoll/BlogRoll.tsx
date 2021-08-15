import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { blogRoll, container, linkToPost, content, info, subtitle, details, field } from './BlogRoll.module.css'

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
            coverphoto {
              childImageSharp {
                gatsbyImageData(
                  width: 968
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
        <h2>Recent posts</h2>
        <p>Load save file</p>
          {
              nodes
               ? nodes.map(({frontmatter, wordCount}) => {
                  return(
                      <div 
                        key={frontmatter.title} 
                        className={container}
                      >
                        <Link className={linkToPost} to={frontmatter.slug}>
                          <div className={content}>
                            { 
                              frontmatter.coverphoto && 
                              <GatsbyImage 
                                image={getImage(frontmatter.coverphoto)}
                                alt={frontmatter.title}
                              /> 
                            }
                            <div className={info}>
                              <h3>{frontmatter.title}</h3>
                              <p className={subtitle}>{frontmatter.subtitle}</p>
                              <ul className={details}>
                                <li>
                                  <span className={field}>TIME</span>
                                  <span>{frontmatter.date}</span>
                                </li>
                                <li>
                                  <span className={field}>WORDS</span>
                                  <span>{wordCount.words}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      </div>
                  )
              })
               : <p>No posts.</p>
          }
      </div>
  )
}

export default BlogRoll
