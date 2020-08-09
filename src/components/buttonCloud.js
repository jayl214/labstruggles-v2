import React, { useState } from "react"
import { Link } from "gatsby"

const ButtonCloud = ({
    defaultBackgroundImageUrl,
    hoverBackgroundImageUrl,
    label,
    className,
    linkTo,
    isExternal
}) => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(defaultBackgroundImageUrl);
    const CLASS_NAME = `button--cloud ${className}`

    const content =(
        <div
            className="button--cloud__content"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`
            }}
            onMouseEnter={hoverBackgroundImageUrl ? ()=>setBackgroundImageUrl(hoverBackgroundImageUrl) : undefined}
            onMouseLeave={hoverBackgroundImageUrl ? ()=>setBackgroundImageUrl(defaultBackgroundImageUrl) : undefined}
        >
            {label}
        </div>
    )

    return(
        <div className={CLASS_NAME}>
            {isExternal ?
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/labstruggles/">
                    {content}
                </a> :
                <Link to={linkTo}>
                    {content}
                </Link>
            }
        </div>
    )
}

export default ButtonCloud
