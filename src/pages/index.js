import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ButtonCloud from "../components/buttonCloud"
import Footer from "../components/footer"
import SEO from "../components/seo"


const IndexPage = () => {

    const images = useStaticQuery(graphql`
        query {
            comicCloud: file(relativePath: { eq: "button_cloud_1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicCloudHover: file(relativePath: { eq: "button_cloud_1_hover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterCloud: file(relativePath: { eq: "button_cloud_2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterCloudHover: file(relativePath: { eq: "button_cloud_2_hover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            cloudSmall: file(relativePath: { eq: "cloud_small.png" }) {
                childImageSharp {
                    fixed(height: 55) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            cloudPair: file(relativePath: { eq: "cloud_pair.png" }) {
                childImageSharp {
                    fixed( height: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            portrait: file(relativePath: { eq: "portrait.png" }) {
                childImageSharp {
                    fixed(height: 65) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <div>
            <SEO title="Home" />
            <div className="home">
                <div className="home__title">
                    <Img className="home__title__logo" fixed={images.portrait.childImageSharp.fixed}/>
                    <h1 className="home__title__header">LabStruggles</h1>
                </div>
                <div className="home__body">
                    <div className="home__body__deco">
                        <Img className="home__body__deco__image home__body__deco__image--cloud" fixed={images.cloudSmall.childImageSharp.fixed}/>
                        <Img className="home__body__deco__image" fixed={images.cloudPair.childImageSharp.fixed}/>
                    </div>
                    <div className="home__body__nav">
                        <ButtonCloud 
                            className="home__body__nav__button"
                            label="Comics"
                            linkTo="/comics/"
                            defaultBackgroundImageUrl={images.comicCloud.childImageSharp.fluid.src}
                            hoverBackgroundImageUrl={images.comicCloudHover.childImageSharp.fluid.src}
                        />
                        <ButtonCloud 
                            className="home__body__nav__button"
                            label="Foster"
                            linkTo="/foster/"
                            defaultBackgroundImageUrl={images.fosterCloud.childImageSharp.fluid.src}
                            hoverBackgroundImageUrl={images.fosterCloudHover.childImageSharp.fluid.src}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default IndexPage
