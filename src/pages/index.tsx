// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Card from "../components/card"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* <Link to="/admin/">login</Link> */}
      {/* <Bio /> */}
      <h1>新着記事</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={{ marginBottom: "40px" }}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              {/* <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `#222222`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link> */}
              <Card
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                date={node.frontmatter.date}
                slug={node.fields.slug}
              />
            </h3>
            {/* <small>{node.frontmatter.date}</small> */}

            {/* <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <p>is section</p>
            </section> */}
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
