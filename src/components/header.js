import React from "react"
import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"

const Header = () => {
  let header

  //   if (path === rootPath) {
  header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <div className="home-header">
        <Link to="/">
          <div className="home-links1">ホーム</div>
        </Link>
        <Link to="/cccccc--tue-jun-02-2020-18-33-19-gmt-0900-日本標準時/">
          <div className="home-links2">自社サービス</div>
        </Link>
        <Link to="/admin">
          <div className="home-admin">記事投稿</div>
        </Link>
        {/* <img
            style={{
              width: `100%`,
              height: `100%`,
              objectFit: `cover`,
             
            }}
            alt="header-img"
            src="/images/uploads/lion-5218109_1280.jpg"
          ></img> */}
      </div>

      {/* <p style={{ backgroundColor: "#ffffff" }}>home blog</p> */}
    </h1>
  )

  return header
}

export default Header
