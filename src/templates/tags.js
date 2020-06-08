import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//   },
//   site: {
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Tags | ${title}`} />
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1"
//             style={{ marginBottom: "6rem" }}
//           >
//             <h1 className="title is-size-2 is-bold-light">Tags</h1>
//             <ul className="taglist">
//               {group.map(tag => (
//                 <li key={tag.fieldValue}>
//                   <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//                     {tag.fieldValue} ({tag.totalCount})
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// )

const TestTemplate = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges
  const title = data.site.siteMetadata.title
  const tag = pageContext.tag
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ))
  console.log(data)
  return (
    <Layout location={location} title={`Tags | ${title}`}>
      <SEO title={tag} />
      <h1>
        {tag}：検索結果 {data.allMarkdownRemark.totalCount}件
      </h1>
      <ul>{postLinks}</ul>
      <p>
        <Link to="/tags/">Browse all tags</Link>
      </p>
    </Layout>
  )
}

export default TestTemplate

export const tagPageQuery = graphql`
  query tagPageQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
