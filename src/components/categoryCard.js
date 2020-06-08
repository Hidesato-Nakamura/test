import React from "react"
import { kebabCase } from "lodash"
import { Link } from "gatsby"

const CategoryCard = () => {
  let tags = ["aaa", "bbb", "ccc", "ddd", "ライオン", "富士山"]
  const categoryCard = (
    <section className="category-card">
      <p
        style={{ textAlign: `center`, marginLeft: `auto`, marginRight: `auto` }}
      >
        カテゴリー
      </p>
      <div>tags</div>
      <ul>
        {tags.map(tag =>
          tags && tags.length ? (
            <li key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
          ) : null
        )}
      </ul>
    </section>
  )
  return categoryCard
}

export default CategoryCard
