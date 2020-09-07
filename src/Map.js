import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({config, style }) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const { Center, Minzoom, Maxzoom, Zoom, Maxbounds } = config;
  const { Light } = style;

    useEffect(() => {
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: Light,
          center: Center,
          minZoom: Minzoom,
          maxZoom: Maxzoom,
          zoom: Zoom,
          maxBounds: Maxbounds
        });
      };
  
      if (!map) initializeMap({ setMap, mapContainer });
    }, [map, Center, Minzoom, Maxzoom, Zoom, Maxbounds, Light]);
    

  return (
    <div className='map-container' ref={mapContainer}/>
  )
};


export default Map;