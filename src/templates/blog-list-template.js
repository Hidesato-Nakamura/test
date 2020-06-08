import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogList = (data, pageContext, location) => {
  console.log(data)
  const posts = data.data.allMarkdownRemark.edges
  const siteTitle = "bloglist"
  return (
    <Layout location={location} title={siteTitle}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return <div key={node.fields.slug}>{title}</div>
      })}
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
