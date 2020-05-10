import React, { useState } from "react"
import { Link } from "gatsby"

const ButtonCloud = ({
    defaultBackgroundImageUrl,
    hoverBackgroundImageUrl,
    label,
    className,
    linkTo
}) => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(defaultBackgroundImageUrl);
    const CLASS_NAME = `button--cloud ${className}`

    return(
        <div className={CLASS_NAME}>
            <Link to={linkTo}>
                <div 
                    className="button--cloud__content"
                    style={{
                        backgroundImage: `url(${backgroundImageUrl})`
                    }}
                    onMouseEnter={()=>setBackgroundImageUrl(hoverBackgroundImageUrl)}
                    onMouseLeave={()=>setBackgroundImageUrl(defaultBackgroundImageUrl)}
                >
                    {label}
                </div>
            </Link>
        </div>
    )
}

export default ButtonCloud
