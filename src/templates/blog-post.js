import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const tags = post.frontmatter.tags
  console.log(data)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <p>閲覧数：{data.pageViews ? data.pageViews.totalCount : 0}</p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div>
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>カテゴリ</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <Link to={`/tags/${tag}`}>
                    <li
                      style={{
                        padding: "0 2rem 1rem 0",
                        marginBottom: "1.5rem",
                        marginTop: "0",
                      }}
                      key={tag + `tag`}
                    >
                      {tag}
                      {/* <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> */}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : null}

          <Bio />
        </div>
      </article>

      <nav
        style={{
          flexWrap: `wrap`,
          listStyle: `none`,
          padding: 0,
          marginBottom: 200,
        }}
      >
        <div style={{ float: "left" }}>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {/* {next.frontmatter.title} → */}← next
            </Link>
          )}
        </div>
        <div style={{ float: "right" }}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {/* ← {previous.frontmatter.title} */}
              prev →
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YY/MM/DD")
        description
        tags
      }
    }
    pageViews(id: { eq: $slug }) {
      totalCount
    }
  }
`
