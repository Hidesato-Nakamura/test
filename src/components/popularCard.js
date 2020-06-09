import React from "react"
import { graphql } from "gatsby"

// const popularCardQuery = graphql`
//   query popularCardQuery {
//     pageViews(id: { eq: "/2020/02/14/gatsby-published-unpublished/" }) {
//       totalCount
//     }
//   }
// `

const PopularCard = () => {
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

export default PopularCard
