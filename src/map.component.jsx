import React from 'react'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 57.1563244187754, 
  lng: 24.851867935584714
};

function MapContent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBaOZcYdaZiNl0JvyePIxQHSR-SjfAstKg"
  })

  const [map, setMap] = React.useState(null)
  const [placeName, setPlaceName] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: center }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setPlaceName(results[0].formatted_address);
      }
    });
  }, [center])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {placeName && (
          <Marker position={center} label={placeName} />
        )}
      </GoogleMap>
  ) : <></>
}

export default MapContent;