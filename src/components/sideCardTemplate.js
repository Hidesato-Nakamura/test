import React, { Children } from "react"
import { kebabCase } from "lodash"
import _ from "lodash"
import { Link, graphql, StaticQuery } from "gatsby"

const SideCardTemplate = ({ children, title }) => {
  return (
    <section className="side-card-template">
      <div className="title">{title}</div>
      <div className="flex line">
        <div className="side" />
        <div className="center" />
        <div className="side" />
      </div>
      {children}
    </section>
  )
}

export default SideCardTemplate
