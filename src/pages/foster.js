import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MapGL, {NavigationControl} from 'react-map-gl'
import Layout from "../components/layout"
import SEO from "../components/seo"
import MapMarkers from "../components/mapMarkers"

const NAV_STYLE = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '1rem'
  }

const FOSTER_POSTS = [
    {
        "city": "Montreal",
        "link": "https://www.instagram.com/p/BkcxA0ogppM/",
        "date": "JUNE 25, 2018",
        "location": "McGill University",
        "latitude": 45.506725,
        "longitude": -73.578299,
        "participantName": "Nicholas Lin",
        "participantTitle": "PhD candidate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "Paris",
        "link": "https://www.instagram.com/p/BkiOqFcg6Xs/",
        "date": "JUNE 27, 2018",
        "location": "Station F",
        "latitude": 48.834132,
        "longitude": 2.371349,
        "participantName": "Nicholas Lin",
        "participantTitle": "PhD candidate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "Cambridge",
        "link": "https://www.instagram.com/p/BlD3qDxAxS2/",
        "date": "JULY 10, 2018",
        "location": "Harvard University",
        "latitude": 42.377027,
        "longitude": -71.116703,
        "participantName": "Jack Minchom",
        "participantTitle": "Master of Engineering candidate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "Durham",
        "link": "https://www.instagram.com/p/BntkNd-B9-O/",
        "date": "SEPTEMBER 14, 2018",
        "location": "Duke University",
        "latitude": 36.001933,
        "longitude": -78.938177,
        "participantName": "Dr. Jeffrey Farner",
        "participantTitle": "Postdoctoral fellow",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "Berlin",
        "link": "https://www.instagram.com/p/BqNU-iChY7D/",
        "date": "NOVEMBER 15, 2018",
        "location": "Berlin-Tegel Airport",
        "latitude": 52.558820,
        "longitude": 13.288673,
        "participantName": "Anthony Wang",
        "participantTitle": "PhD candidate",
        "participantInsitute": "Berlin Institute of Technology, Germany"
    },
    {
        "city": "London",
        "link": "https://www.instagram.com/p/Bqcx7kFBh8o/",
        "date": "NOVEMBER 21, 2018",
        "location": "University College London",
        "latitude": 51.524593,
        "longitude": -0.134072,
        "participantName": "Anthony Wang",
        "participantTitle": "PhD candidate",
        "participantInsitute": "Berlin Institute of Technology, Germany"
    },
    {
        "city": "Saskatoon",
        "link": "https://www.instagram.com/p/BqntZJYhxe9/",
        "date": "NOVEMBER 25, 2018",
        "location": "University of Saskatchewan",
        "latitude": 52.133367,
        "longitude": -106.631390,
        "participantName": "Jack Minchom",
        "participantTitle": "Master of Engineering candidate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "St. Lucia",
        "link": "https://www.instagram.com/p/B1Wcl-HhQbM/",
        "date": "AUGUST 19, 2019",
        "location": "Reduit Beach",
        "latitude": 14.074829,
        "longitude": -60.955375,
        "participantName": "Rachel Cheong",
        "participantTitle": "Undergraduate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "Hawaii",
        "link": "https://www.instagram.com/p/B2ejZ-8h9QD/",
        "date": "SEPTEMBER 16, 2019",
        "location": "Kaawa",
        "latitude": 21.552052,
        "longitude": -157.850855,
        "participantName": "Sara Matthews",
        "participantTitle": "Master of Engineering candidate",
        "participantInsitute": "McGill University, Canada"
    },
    {
        "city": "San Diego",
        "link": "https://www.instagram.com/p/B5vOREMJzfe/",
        "date": "DECEMBER 6, 2019",
        "location": "2019 ACS National Meeting",
        "latitude": 32.774603,
        "longitude": -117.176307,
        "participantName": "Shawn Chahal",
        "participantTitle": "PhD candidate",
        "participantInsitute": "McGill University, Canada"
    },
    ].reverse()



const Foster = ({location}) => {

    const images = useStaticQuery(graphql`
        query {
            fosterPostMcGill: file(relativePath: { eq: "fosterPosts/mcgill.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostStaionF: file(relativePath: { eq: "fosterPosts/station_f.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostHarvard: file(relativePath: { eq: "fosterPosts/harvard.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostDuke: file(relativePath: { eq: "fosterPosts/duke.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostBerlinAirport: file(relativePath: { eq: "fosterPosts/berlin_airport.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostUcl: file(relativePath: { eq: "fosterPosts/ucl.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostSaskatchewan: file(relativePath: { eq: "fosterPosts/saskatchewan.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostStLucia: file(relativePath: { eq: "fosterPosts/st_lucia.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostHawaii: file(relativePath: { eq: "fosterPosts/hawaii.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            fosterPostSanDiego: file(relativePath: { eq: "fosterPosts/san_diego.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 110) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
        }
    `)

    const fosterPostImages = [
        images.fosterPostMcGill.childImageSharp.fluid,
        images.fosterPostStaionF.childImageSharp.fluid,
        images.fosterPostHarvard.childImageSharp.fluid,
        images.fosterPostDuke.childImageSharp.fluid,
        images.fosterPostBerlinAirport.childImageSharp.fluid,
        images.fosterPostUcl.childImageSharp.fluid,
        images.fosterPostSaskatchewan.childImageSharp.fluid,
        images.fosterPostStLucia.childImageSharp.fluid,
        images.fosterPostHawaii.childImageSharp.fluid,
        images.fosterPostSanDiego.childImageSharp.fluid,
    ].reverse()

    const [viewport, setViewPort ] = useState({
        latitude: 45.5017,
        longitude: -73.5673,
        zoom: 3
    })

    const [activeMarkerIndex, setActiveMarkerIndex ] = useState(null)

    const _onViewportChange = (viewport) => setViewPort({
        ...viewport
    });


    const _onClickMarker = (marker={}, index) => {
        setViewPort({
            ...viewport,
            latitude: marker.latitude,
            longitude: marker.longitude,
            zoom: 5,
            transitionDuration: 200
        })
        setActiveMarkerIndex(index)
        document.getElementById(`post-${index}`).scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});   //Even IE6 supports this
    };

    return (
        <Layout location={location}>
            <SEO title="Foster" />
            <div className="foster">
                <div className="foster__list">
                    <div className="foster__list__description">
                        <div className="foster__list__description__title">The LabStruggles Foster Project</div>
                        <div className="foster__list__description__paragraph">
                            We want to make LabStruggles a place where researchers from around the world can show off what they've been up to! Give us the word, and the LabStruggles figurine will come visit you.
                        </div>
                        <div className="foster__list__description__paragraph">
                            To participate in the LabStruggles Foster Project, please contact us:
                            <a href="mailto:info@labstruggles.com?Subject=Foster%20Program" target="_top">info@labstruggles.com</a>
                        </div>
                    </div>
                    {FOSTER_POSTS.map((marker={}, index)=> {
                        const participant = [marker.participantName, marker.participantTitle, marker.participantInsitute].join(", ")
                        return (
                            <div
                                className={`foster__list__card ${index === activeMarkerIndex ? 'foster__list__card--active' : ''}`}
                                id={`post-${index}`}
                                onClick={() => _onClickMarker(marker, index)}
                            >
                                <div className="foster__list__card__image">
                                    <a rel="noopener noreferrer" target="_blank" href={marker.link}>
                                        <Img fluid={fosterPostImages[index]}/>
                                    </a>
                                </div>
                                <div className="foster__list__card__description">
                                    <div>
                                        <div className="foster__list__card__description__city">
                                            {marker.city}
                                        </div>
                                        <div className="foster__list__card__description__header">
                                            <a rel="noopener noreferrer" target="_blank" href={marker.link}>{marker.location.toUpperCase()}</a>
                                        </div>
                                        <div className="foster__list__card__description__participant">
                                            {participant}
                                        </div>
                                    </div>
                                    <div className="foster__list__card__description__date">
                                        {marker.date}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="foster__map">
                    <MapGL
                        {...viewport}
                        width="100%"
                        height="100%"
                        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_ACCESS_TOKEN}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={_onViewportChange}
                        scrollZoom={false}
                    >
                        <MapMarkers data={FOSTER_POSTS} onClick={_onClickMarker} activeMarkerIndex={activeMarkerIndex}/>
                        <div style={NAV_STYLE}>
                            <NavigationControl
                            showCompass={false}
                            />
                        </div>
                    </MapGL>
                </div>
            </div>
        </Layout>
    )
}


export default Foster
