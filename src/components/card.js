import React from "react"
import { Link } from "gatsby"

export const MainCard = ({ node }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  const article = node.html
  console.log(node)
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="main-card flex">
        <div className="card-img-block main">
          <img src={frontmatter.featuredimage} alt="" />
        </div>

        <div className="card-content">
          <div className="tag flex">
            {frontmatter.tags.map((tag, index) => {
              return <div key={index}>#{tag}</div>
            })}
          </div>
          <div className="title">{frontmatter.title}</div>
          <div className="date">{frontmatter.date}</div>
          <div className="text">{frontmatter.description}</div>
        </div>
      </section>
    </Link>
  )

  return card
}

export const SubCard = ({ node }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="sub-card">
        <div className="card-img-block">
          <img src={frontmatter.featuredimage} alt="" />
        </div>

        <div className="card-content">
          <div className="tag flex">
            {frontmatter.tags.map((tag, index) => {
              return <div key={index}>#{tag}</div>
            })}
          </div>
          <div className="title">{frontmatter.title}</div>
          <div className="date">{frontmatter.date}</div>
          <div className="text">{frontmatter.description}</div>
        </div>
      </section>
    </Link>
  )
  return card
}
