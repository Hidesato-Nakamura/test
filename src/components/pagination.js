import React from "react"
import { Link } from "gatsby"

const PageNation = () => {
  return (
    <div class="pager">
      <ul class="pagination">
        <li class="pre">
          <Link to="/">
            <span>«</span>
          </Link>
        </li>
        <li>
          <Link to="/" class="active">
            <span>1</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/2">
            <span>2</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/3">
            <span>3</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/4">
            <span>4</span>
          </Link>
        </li>
        <li>
          <Link to="blog/5">
            <span>5</span>
          </Link>
        </li>
        <li class="next">
          <Link href="#">
            <span>»</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PageNation
