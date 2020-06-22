import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SideCardTemplate from "./sideCardTemplate"

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
            date(formatString: "MMMM DD. YYYY")
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
          date: post.node.frontmatter.date,
          slug: post.node.fields.slug,
          totalCount: edge.node.totalCount,
        })
      }
    })
  })
  console.log(postResults)
  const pc = (
    <SideCardTemplate title="Ranking">
      <div className="popular-card">
        <img src="/images/uploads/30-Most-Important-Google-Ranking-Factors-A-Beginner-Should-Know-640x250-1.png"></img>
        <ul>
          {postResults.map((postResult, index) => {
            return index < 5 ? (
              <Link
                to={`${postResult.slug}`}
                style={{ textDecoration: `none` }}
              >
                <li key={postResult.slug}>
                  <div className="rank">{index + 1}</div>
                  <div className="article">
                    <div className="article-titles">{postResult.title}</div>
                    <div className="details">
                      <div className="date">{postResult.date}</div>
                      <div
                        className="material-icons"
                        style={{ fontSize: `18px` }}
                      >
                        trending_up
                      </div>
                      <div className="views">{postResult.totalCount}</div>
                    </div>
                  </div>
                </li>
              </Link>
            ) : null
          })}
        </ul>
      </div>
      {/* <div>記事一覧</div> */}
    </SideCardTemplate>
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
