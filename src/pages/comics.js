import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowLeft from "../svg/arrowLeft.svg"
import ArrowRight from "../svg/arrowRight.svg"

import 'pure-react-carousel/dist/react-carousel.es.css';

const  getWindowWidth = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth || 0;
    }
}

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
            }
        }
    `)

    // arrowScribbleRight: file(relativePath: { eq: "arrowRight.svg" }) {
    //     childImageSharp {
    //         fixed(height: 65) {
    //             ...GatsbyImageSharpFixed
    //         }
    //     }
    // },
    // arrowScribbleLeft: file(relativePath: { eq: "arrowLeft.svg" }) {
    //     childImageSharp {
    //         fixed(height: 65) {
    //             ...GatsbyImageSharpFixed
    //         }
    //     }
    // }
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    const [animateLeftArrowTwitch, setAnimateLeftArrowTwitch] = useState(false);
    const [animateLeftArrowPulse, setAnimateLeftArrowPulse] = useState(false);
    const [animateRightArrowTwitch, setAnimateRightArrowTwitch] = useState(false);
    const [animateRightArrowPulse, setAnimateRightArrowPulse] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <Layout location={location}>
            <SEO title="Comics" />
            <div className="comics">
                <CarouselProvider
                    className="comics__carousel"
                    infinite
                    visibleSlides={windowWidth < 768 ?  1 : 2}
                    totalSlides={8}
                    naturalSlideWidth={10}
                    naturalSlideHeight={10}
                >
                    <div className="comics__carousel__buttonGroup">
                        
                        <ButtonBack
                            className={`
                                comics__carousel__buttonGroup__button
                                ${animateLeftArrowTwitch ? "comics__carousel__buttonGroup__button--animate" : ""}
                                ${animateLeftArrowPulse ? "comics__carousel__buttonGroup__button--pulse" : ""}
                            `}
                            onMouseEnter={()=>setAnimateLeftArrowPulse(true)}
                            onMouseLeave={()=>setAnimateLeftArrowPulse(false)}
                            onClick={()=>setAnimateLeftArrowTwitch(true)}
                            onAnimationEnd={()=> {
                                setAnimateLeftArrowTwitch(false)
                            }}
                        >
                            <ArrowLeft
                                className="comics__carousel__buttonGroup__button__arrow"
                            />
                        </ButtonBack>
                        <ButtonNext
                            className={`
                                comics__carousel__buttonGroup__button
                                ${animateRightArrowTwitch ? "comics__carousel__buttonGroup__button--animate" : ""}
                                ${animateRightArrowPulse ? "comics__carousel__buttonGroup__button--pulse" : ""}
                            `}
                            onMouseEnter={()=>setAnimateRightArrowPulse(true)}
                            onMouseLeave={()=>setAnimateRightArrowPulse(false)}
                            onClick={()=>setAnimateRightArrowTwitch(true)}
                            onAnimationEnd={()=> {
                                setAnimateRightArrowTwitch(false)
                            }}
                        >
                            <ArrowRight
                                className="comics__carousel__buttonGroup__button__arrow"
                            />
                        </ButtonNext>
                    </div>
                    <Slider>
                        <Slide index={0}>
                            <Img fluid={images.comicTacticalPipette?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={1}>
                            <Img fluid={images.comicFullName?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={2}>
                            <Img fluid={images.comicHotChocolate?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={3}>
                            <Img fluid={images.comicElevator?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={4}>
                            <Img fluid={images.comicDisappointed?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={5}>
                            <Img fluid={images.comicStudentnumber3?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={6}>
                            <Img fluid={images.comicFactoid?.childImageSharp?.fluid}/>
                        </Slide>
                        <Slide index={7}>
                            <Img fluid={images.comicProfonprofhate?.childImageSharp?.fluid}/>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </Layout>
    )
}


export default Comics
