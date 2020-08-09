import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ButtonCloud from "../components/buttonCloud"

const Comics = ({location}) => {
    const images = useStaticQuery(graphql`
        query {
            comicTacticalPipette: file(relativePath: { eq: "comics/tacticalpipette.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicFullName: file(relativePath: { eq: "comics/fullname.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicHotChocolate: file(relativePath: { eq: "comics/hotchocolate.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicElevator: file(relativePath: { eq: "comics/elevator.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },

            comicDisappointed: file(relativePath: { eq: "comics/disappointed.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },

            comicFactoid: file(relativePath: { eq: "comics/factoid.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicProfonprofhate: file(relativePath: { eq: "comics/profonprofhate.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            comicStudentnumber3: file(relativePath: { eq: "comics/studentnumber3.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            cloud1: file(relativePath: { eq: "button_cloud_1.png" }) {
                childImageSharp {
                    fixed(height: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            cloud1Hover: file(relativePath: { eq: "button_cloud_1_hover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            cloud2: file(relativePath: { eq: "button_cloud_2.png" }) {
                childImageSharp {
                    fixed(height: 150) {
                        ...GatsbyImageSharpFixed
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
            buttonCloud: file(relativePath: { eq: "button_cloud_2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            buttonCloudHover: file(relativePath: { eq: "button_cloud_2_hover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
        }
    `)

    const comics = [
        images.comicTacticalPipette?.childImageSharp?.fluid,
        images.comicFullName?.childImageSharp?.fluid,
        images.comicHotChocolate?.childImageSharp?.fluid,
        images.comicElevator?.childImageSharp?.fluid,
        images.comicDisappointed?.childImageSharp?.fluid,
        images.comicStudentnumber3?.childImageSharp?.fluid,
        images.comicFactoid?.childImageSharp?.fluid,
        images.comicProfonprofhate?.childImageSharp?.fluid,
]

    return (
        <Layout location={location}>
            <SEO title="Comics" />
            <ParallaxProvider>
                <div className="comics">
                    <div className="comics__list">
                        <Parallax
                            className="comics__background"
                            y={[0, 80]}
                        >
                                <Img className="comics__background__cloud" fixed={images.cloud2.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloud1.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloudSmall.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloudPair.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloud1.childImageSharp.fixed}/>
                        </Parallax>

                        <Parallax
                            className="comics__background"
                            y={[0, 45]}
                        >
                                <Img className="comics__background__cloud" fixed={images.cloud1.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloud2.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloudSmall.childImageSharp.fixed}/>
                                <Img className="comics__background__cloud" fixed={images.cloudSmall.childImageSharp.fixed}/>

                        </Parallax>


                        <Parallax
                            className="comics__background"
                            y={[-7, 55]}
                        >
                            <Img className="comics__background__cloud" fixed={images.cloudSmall.childImageSharp.fixed}/>
                            <Img className="comics__background__cloud" fixed={images.cloud1.childImageSharp.fixed}/>
                            <Img className="comics__background__cloud" fixed={images.cloud2.childImageSharp.fixed}/>
                        </Parallax>

                        <div className="comics__list__column">
                            {comics.map((comic, i) =>
                                <div key={i} className="comics__list__column__entry">
                                    <Img fluid={comic}/>
                                </div>
                            )}
                            <ButtonCloud
                                isExternal
                                className="comics__list__column__button"
                                label="More Comics"
                                linkTo="https://www.instagram.com/labstruggles/"
                                defaultBackgroundImageUrl={images.buttonCloud.childImageSharp.fluid.src}
                                hoverBackgroundImageUrl={images.buttonCloudHover.childImageSharp.fluid.src}
                            />
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </Layout>
    )
}


export default Comics
