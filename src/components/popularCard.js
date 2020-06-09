import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const popularCardQuery = graphql`
  query popularCardQuery {
    allPageViews(sort: { order: DESC, fields: totalCount }) {
      edges {
        node {
          totalCount
          path
        }
      }
    }
    allMarkdownRemark {
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

const PopularCardContents = ({ data }) => {
  console.log(data)
  const views = data.allPageViews.edges
  const posts = data.allMarkdownRemark.edges
  let postResults = []
  views.forEach(edge => {
    posts.forEach(post => {
      //全ページから投稿された記事を抽出
      if (post.node.fields.slug == edge.node.path) {
        // console.log(`slug=${post.node.fields.slug}`)
        // console.log(`path=${edge.node.path}`)
        postResults.push({
          title: post.node.frontmatter.title,
          slug: post.node.fields.slug,
          totalCount: edge.node.totalCount,
        })
      }
    })
  })
  console.log(postResults)
  const pc = (
    <section className="popular-card">
      <p
        style={{ textAlign: `center`, marginLeft: `auto`, marginRight: `auto` }}
      >
        人気記事
      </p>
      <ul>
        {postResults.map(postResult => {
          return (
            <li key={postResult.slug}>
              <Link to={`${postResult.slug}`}>
                <p>
                  {postResult.title} ({postResult.totalCount}views)
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
      {/* <div>記事一覧</div> */}
    </section>
  )

  return pc
}

export default function PopularCard() {
  // let tags = ["aaa", "bbb", "ccc", "ddd", "ライオン", "富士山"]
  // console.log(`data=${data}`)
  const popularCard = (
    <StaticQuery
      query={popularCardQuery}
      render={data => <PopularCardContents data={data} />}
    />
  )
  return popularCard
}
