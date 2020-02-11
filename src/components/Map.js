import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

function Map() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

  const [lng, setLng] = useState(19);
  const [lat, setLat] = useState(49);
  const [zoom, setZoom] = useState(3.5);

  let mapContainer;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/dandesz198/cjnmwlirz1lpm2sp5gczt80d5",
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={el => (mapContainer = el)} className="mapContainer" />
    </div>
  );
}

export default Map;
