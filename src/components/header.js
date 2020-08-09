import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { useState } from "react"

import AniLinkCover from "./aniLinkCover"

const Header = ({
    currentPath= ''
}) => {

    const images = useStaticQuery(graphql`
        query {
            portrait: file(relativePath: { eq: "portrait.png" }) {
                childImageSharp {
                    fixed(height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            blobPink: file(relativePath: { eq: "blob_pink.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            blobCyan: file(relativePath: { eq: "blob_cyan.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            blobGreen: file(relativePath: { eq: "blob_green.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            iconInstagram: file(relativePath: { eq: "social_insta.png" }) {
                childImageSharp {
                    fixed(height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            iconFacebook: file(relativePath: { eq: "social_fb.png" }) {
                childImageSharp {
                    fixed(height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            iconTwitter: file(relativePath: { eq: "social_twit.png" }) {
                childImageSharp {
                    fixed(height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            iconInstagramLarge: file(relativePath: { eq: "social_insta.png" }) {
                childImageSharp {
                    fixed(height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            iconFacebookLarge: file(relativePath: { eq: "social_fb.png" }) {
                childImageSharp {
                    fixed(height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            iconTwitterLarge: file(relativePath: { eq: "social_twit.png" }) {
                childImageSharp {
                    fixed(height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const [isMenuActive, setIsMenuActive] = useState(false);
    const _onToggleMenu = () => setIsMenuActive(!isMenuActive);
  
    return (
        <header
            id="header"
        >
            <div className="header__title">
                <AniLinkCover to="/">
                    <Img className="header__title__logo" fixed={images.portrait.childImageSharp.fixed}/>
                    <div className="header__title__name">
                        LabStruggles
                    </div>
                </AniLinkCover>
            </div>
            <div className="header__nav">
                <AniLinkCover to="/comics/">
                    <div className={`header__nav__button ${currentPath.includes('comics') ? 'header__nav__button--active' : ''}`}>
                        Comics
                    </div>
                </AniLinkCover>
                <AniLinkCover to="/foster/">
                    <div className={`header__nav__button ${currentPath.includes('foster') ? 'header__nav__button--active' : ''}`}>
                        Foster
                    </div>
                </AniLinkCover>
            </div>
            
            <div className="header__social">
                <div className="header__social__icon">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/labstruggles/">
                        <Img fixed={images.iconInstagram.childImageSharp.fixed}/>
                    </a>
                </div>
                <div className="header__social__icon">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/labstruggles/">
                        <Img fixed={images.iconFacebook.childImageSharp.fixed}/>
                    </a>
                </div>
                <div className="header__social__icon">
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/LabStruggles">
                        <Img fixed={images.iconTwitter.childImageSharp.fixed}/>
                    </a>
                </div>
            </div>
            <div className="header__menu">
                <div
                    className={`header__menu__toggle ${isMenuActive ? 'header__menu__toggle--active' : ''}`}
                    onClick={_onToggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`header__menu__dropdown ${isMenuActive ? 'header__menu__dropdown--active' : ''}`}>
                    <div className="header__menu__dropdown__body">
                        <AniLinkCover to="/comics/" className="header__menu__dropdown__body__link">
                            <div className="header__menu__dropdown__body__link__content" style={{backgroundImage: `url(${images.blobPink.childImageSharp.fluid.src})`}}>
                                Comics
                            </div>
                        </AniLinkCover>
                        <AniLinkCover to="/foster/" className="header__menu__dropdown__body__link"> 
                            <div className="header__menu__dropdown__body__link__content" style={{backgroundImage: `url(${images.blobCyan.childImageSharp.fluid.src})`}}>
                                Foster
                            </div>
                        </AniLinkCover>
                        <div className="header__menu__dropdown__body__social">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/labstruggles/">
                                <Img fixed={images.iconInstagramLarge.childImageSharp.fixed}/>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/labstruggles/">
                                <Img fixed={images.iconFacebookLarge.childImageSharp.fixed}/>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/LabStruggles">
                                <Img fixed={images.iconTwitterLarge.childImageSharp.fixed}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
       </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
