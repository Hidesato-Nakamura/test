import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import Header from "../components/header"
import CategoryCard from "../components/categoryCard"
import PopularCard from "../components/popularCard"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        maxWidth: `100%`,
      }}
    >
      <header>
        <Header />
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
          <PopularCard />
        </div>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} footer</div>
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
