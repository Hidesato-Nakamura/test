import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageNation from "../components/pagination"
import Card from "../components/card"

import { rhythm } from "../utils/typography"

const BlogList = (data, pageContext, location) => {
  console.log(data)
  const posts = data.data.allMarkdownRemark.edges
  const siteTitle = "bloglist"
  return (
    <Layout location={location} title={siteTitle}>
      <h5>* サンプルのダミーが少ないので２枚ずつページネーションしています.</h5>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
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
      <PageNation />
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
