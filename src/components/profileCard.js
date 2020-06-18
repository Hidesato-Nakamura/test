import React from "react"
import { kebabCase } from "lodash"
import _ from "lodash"
import { Link, graphql, StaticQuery } from "gatsby"
import SideCardTemplate from "./sideCardTemplate"

const ProfileCard = () => {
  const bios = [
    "web, 3DCG, XR, アプリケーション開発を行うデザインラボです。",
    "デザインとエンジニアリングを組み合わせた新たな表現を目標とします。",
  ]
  return (
    <SideCardTemplate title="Profile">
      <div className="profile-card">
        <img src="/images/uploads/lion-5218109_1280.jpg"></img>
        <div className="bio">
          <div className="name">株式会社AFFEXION</div>
          <div className="profile">
            {bios.map(bio => {
              return (
                <div>
                  {bio}
                  <br />
                </div>
              )
            })}
          </div>
        </div>
        <div className="button">company</div>
      </div>
    </SideCardTemplate>
  )
}

export default ProfileCard
