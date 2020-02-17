import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReactMapboxGl from "react-mapbox-gl";

import "./Map.css";

const MapboxMap = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY
});

const Map = props => {
  const [center, setCenter] = useState([19, 49]);
  const [zoom, setZoom] = useState([3.5]);
  const { id } = useParams();

  useEffect(() => {
    const data = require("../assets/data.json");
    const param = window.location.pathname.substring(1, window.location.pathname.length);
    if (param) {
      if (zoom != 12.5) {
        setCenter(data[param].center);
        setZoom([12.5]);
      }
    } else {
      if (zoom != 3.5) {
        setCenter([19, 49]);
        setZoom([3.5]);
      }
    }
    // map.on("load", () => {
    //   map.addSource("tisztviselotelep", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       geometry: {
    //         type: "Polygon",
    //         coordinates: [
    //           [
    //             [19.098444, 47.475599],
    //             [19.089123, 47.479085],
    //             [19.093497, 47.480961],
    //             [19.092884, 47.485727],
    //             [19.103686, 47.482032]
    //           ]
    //         ]
    //       }
    //     }
    //   });
    //   map.addLayer({
    //     id: "tisztviselotelep",
    //     type: "fill",
    //     source: "tisztviselotelep",
    //     layout: {},
    //     paint: {
    //       "fill-color": "#3498db",
    //       "fill-opacity": 0.5
    //     }
    //   });
  });

  return (
    <MapboxMap
      style="mapbox://styles/dandesz198/cjnmwlirz1lpm2sp5gczt80d5"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      center={center}
      zoom={zoom}
    >
      {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer> */}
    </MapboxMap>
  );
};

export default Map;
