import React from "react"
import { Link } from "gatsby"

const Card = ({ title, description, date, slug, featuredImageSrc }) => {
  console.log(date)
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="card">
        <div className="card-img-block">
          <img className="card-img" src={featuredImageSrc} alt="" />
        </div>

        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <h5 className="card-date">{date}</h5>
        </div>
        {/* <div
          style={{
            clear: "both",
            height: 0,
          }}
        ></div> */}
      </section>
    </Link>
  )

  return card
}

export default Card
