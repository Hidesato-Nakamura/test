import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import Header from "../components/header"
import CategoryCard from "../components/categoryCard"
import PopularCard from "../components/popularCard"
import ProfileCard from "../components/profileCard"

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
      <main>
        <div className="children">{children}</div>
        <div className="side">
          <Banner />
          <ProfileCard />
          <PopularCard />
          <CategoryCard />
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
