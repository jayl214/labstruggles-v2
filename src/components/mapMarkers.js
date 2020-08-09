import React from 'react';
import {Marker} from 'react-map-gl';
import MapPinIcon from "../svg/mapPinIcon.svg"
const SIZE = 28;

const MapMarkers = ({
    data = [],
    onClick = () => {},
    activeMarkerIndex
}) => {
    const _onClickMarker = (marker, index) => () => {
        onClick(marker, index)
    }

    return data.map((marker, index) => (
        <Marker key={`marker-${index}`} longitude={marker.longitude} latitude={marker.latitude}>
            <MapPinIcon
                style={{
                    cursor: 'pointer',
                    fill: index === activeMarkerIndex ? 'black' : 'white',
                    stroke: 'none',
                }}
                onClick={_onClickMarker(marker, index)}
            />
        </Marker>
    ));
}

export default MapMarkers