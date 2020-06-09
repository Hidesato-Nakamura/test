import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const popularCardQuery = graphql`
  query popularCardQuery {
    pageViews {
      totalCount
    }
  }
`

const PopularCardContents = ({ data }) => {
  console.log(data)
  const pc = (
    <section className="popular-card">
      <p
        style={{ textAlign: `center`, marginLeft: `auto`, marginRight: `auto` }}
      >
        人気記事
      </p>
      <div>記事一覧</div>
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
