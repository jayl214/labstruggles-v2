import React, { useState } from 'react';
import {Marker} from 'react-map-gl';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const icon2 = "M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"

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
            <svg
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                style={{
                    cursor: 'pointer',
                    // #baffff //blue
                    // fill: '#ffd2ff', //pink
                    // fill: '#b4feb5', // green
                    // fill: index === activeMarkerIndex ? '#ffd2ff' : '#b4feb5',
                    // fill: index === activeMarkerIndex ? 'cyan' : '#b4feb5',
                    fill: index === activeMarkerIndex ? 'black' : 'white',
                    stroke: 'none',
                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                }}
                onClick={_onClickMarker(marker, index)}
            >
                <path
                    stroke="black"
                    strokeWidth=".1rem"
                    d="M 18 10 C 18 8.894531 17.609375 7.953125 16.828125 7.171875 C 16.046875 6.390625 15.105469 6 14 6 C 12.894531 6 11.953125 6.390625 11.171875 7.171875 C 10.390625 7.953125 10 8.894531 10 10 C 10 11.105469 10.390625 12.046875 11.171875 12.828125 C 11.953125 13.609375 12.894531 14 14 14 C 15.105469 14 16.046875 13.609375 16.828125 12.828125 C 17.609375 12.046875 18 11.105469 18 10 Z M 22 10 C 22 11.136719 21.828125 12.066406 21.484375 12.796875 L 15.796875 24.890625 C 15.628906 25.234375 15.382812 25.503906 15.054688 25.703125 C 14.726562 25.902344 14.375 26 14 26 C 13.625 26 13.273438 25.902344 12.945312 25.703125 C 12.617188 25.503906 12.375 25.234375 12.21875 24.890625 L 6.515625 12.796875 C 6.171875 12.066406 6 11.136719 6 10 C 6 7.792969 6.78125 5.90625 8.34375 4.34375 C 9.90625 2.78125 11.792969 2 14 2 C 16.207031 2 18.09375 2.78125 19.65625 4.34375 C 21.21875 5.90625 22 7.792969 22 10 Z M 22 10 "
                />
            </svg>
        </Marker>
    ));
}

export default MapMarkers