import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = props => {
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
      zoom: zoom,
      maxZoom: 14,
      minZoom: 3.5
    });

    map.on("load", () => {
      map.addSource("tisztviselotelep", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [19.098444, 47.475599],
                [19.089123, 47.479085],
                [19.093497, 47.480961],
                [19.092884, 47.485727],
                [19.103686, 47.482032]
              ]
            ]
          }
        }
      });
      map.addLayer({
        id: "tisztviselotelep",
        type: "fill",
        source: "tisztviselotelep",
        layout: {},
        paint: {
          "fill-color": "#3498db",
          "fill-opacity": 0.5
        }
      });
      // setTimeout(() => {
      //   map.flyTo({
      //     center: [19.096794, 47.480545],
      //     zoom: 14,
      //     curve: 1,
      //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
      //   });
      // }, 1000);
    });
  });

  return (
    <div>
      <div ref={el => (mapContainer = el)} className="mapContainer" />
    </div>
  );
};

export default Map;
