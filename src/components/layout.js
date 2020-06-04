import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import Header from "../components/header"
import CategoryCard from "../components/categoryCard"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        maxWidth: `100%`,
      }}
    >
      <header>
        <Header title={title} path={location.pathname} rootPath={rootPath} />
      </header>
      <main
        style={{
          maxWidth: `85%`,
          overflow: `hidden`,
          margin: `auto`,
          marginLeft: `auto`,
          marginRight: `auto`,
          display: `flex`,
        }}
      >
        <div
          style={{
            width: `75%`,
          }}
        >
          {children}
        </div>

        <div
          style={{
            width: `25%`,
            marginLeft: `50px`,
          }}
        >
          <Banner />
          <CategoryCard />
        </div>
      </main>

      <footer>
        © {new Date().getFullYear()}, footer
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
