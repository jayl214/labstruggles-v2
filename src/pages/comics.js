import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const  getWindowWidth = () => window?.innerWidth || 0;

const Comics = () => {

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
            arrowScribbleRight: file(relativePath: { eq: "scribbleArrowRight.jpg" }) {
                childImageSharp {
                    fixed(height: 65) {
                        ...GatsbyImageSharpFixed
                    }
                }
            },
            arrowScribbleLeft: file(relativePath: { eq: "scribbleArrowLeft.jpg" }) {
                childImageSharp {
                    fixed(height: 65) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    const [animateLeftArrowTwitch, setAnimateLeftArrowTwitch] = useState(false);
    const [animateLeftArrowPulse, setAnimateLeftArrowPulse] = useState(false);
    const [animateRightArrowTwitch, setAnimateRightArrowTwitch] = useState(false);
    const [animateRightArrowPulse, setAnimateRightArrowPulse] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth > 768;

    return (
        <Layout>
            <SEO title="Comics" />
            <div className="comics">
                <CarouselProvider
                    className="comics__carousel"
                    infinite
                    visibleSlides={isMobile ?  2 : 1}
                    totalSlides={4}
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
                            <Img fixed={images.arrowScribbleLeft.childImageSharp.fixed}/>
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
                            <Img fixed={images.arrowScribbleRight.childImageSharp.fixed}/>
                        </ButtonNext>
                    </div>
                    <Slider>
                        <Slide index={0}>
                            <Img fluid={images.comicTacticalPipette.childImageSharp.fluid}/>
                        </Slide>
                        <Slide index={1}>
                            <Img fluid={images.comicFullName.childImageSharp.fluid}/>
                        </Slide>
                        <Slide index={2}>
                            <Img fluid={images.comicHotChocolate.childImageSharp.fluid}/>
                        </Slide>
                        <Slide index={3}>
                            <Img fluid={images.comicElevator.childImageSharp.fluid}/>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </Layout>
    )
}


export default Comics
