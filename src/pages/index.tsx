// Gatsby supports TypeScript natively!
//ホームです。
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
          featuredimage: String
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
        return (
          <article key={node.fields.slug} style={{ marginBottom: "40px" }}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Card
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                featuredImageSrc={node.frontmatter.featuredimage}
              />
            </h3>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YY/MM/DD")
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`
