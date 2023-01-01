import React from 'react'
import { GoogleMap, Marker, Polygon } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '570px'
};

const center = {
    lat: 25.4481,
    lng: 82.8569
};



function Map({ marker }) {
    const options = {
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
        >
            {
                marker.map((e) => {
                    return <Marker
                        position={e}
                    />
                })
            }
            <Polygon
                paths={marker}
                options={options}
            />

        </GoogleMap>
    )
}

export default Map