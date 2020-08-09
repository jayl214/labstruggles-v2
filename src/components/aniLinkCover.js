import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const COLORS = ["#b2fdb2", "#d9ffff", "#ffd9ff"]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const AniLinkCover = ({children, to, className}) => {
    const bgColor = COLORS[getRandomInt(3)]
    return (
        <AniLink
            paintDrip
            className={className}
            to={to}
            hex={bgColor}
        >
            {children}
        </AniLink>
        // <AniLink
        //     cover
        //     className={className}
        //     to={to}
        //     bg={bgColor}
        // >
        //     {children}
        // </AniLink>
    )
}

export default AniLinkCover