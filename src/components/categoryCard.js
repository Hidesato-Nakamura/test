import React from "react"
import { kebabCase } from "lodash"
import _ from "lodash"
import { Link, graphql, StaticQuery } from "gatsby"
import SideCardTemplate from "./sideCardTemplate"

const categoryCardQuery = graphql`
  query categoryCardQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`

//①全てのタグを検索する
//②数を調べてtotalCountsにオブジェクトとして格納し直す
//（）内にタグの数を表示させる。

const CategoryCardContents = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  let tags = []
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = _.uniq(tags)
  // console.log(tags)
  let tagsList = []

  tags.forEach(tag => {
    let count = 0
    posts.forEach(edge => {
      // console.log(`${tag}:${edge.node.frontmatter.tags}`)
      edge.node.frontmatter.tags.forEach(_tag => {
        if (_tag == tag) {
          ++count
        }
      })
    })
    tagsList.push({
      tag: tag,
      totalCount: count,
    })
  })
  // console.log(tagsList)

  const categoryCardContents = (
    <SideCardTemplate title="Tags">
      <div className="category-card">
        <ul>
          {tagsList.map(
            list => (
              // list && list.length ? (
              <Link
                to={`/tags/${kebabCase(list.tag)}/`}
                style={{ textDecoration: `none` }}
              >
                <li key={list.tag + `tag`}>
                  <div>
                    #{list.tag}
                    {/* ({`${list.totalCount}`}) */}
                  </div>
                </li>
              </Link>
            )
            // ) : null
          )}
        </ul>
      </div>
    </SideCardTemplate>
  )

  return categoryCardContents
}

export default function CategoryCard() {
  // let tags = ["aaa", "bbb", "ccc", "ddd", "ライオン", "富士山"]
  // console.log(`data=${data}`)
  const categoryCard = (
    <StaticQuery
      query={categoryCardQuery}
      render={data => <CategoryCardContents data={data} />}
    />
  )
  return categoryCard
}
