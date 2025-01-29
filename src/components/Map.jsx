import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useContext } from "react";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"; // Temporary Workaround See https://github.com/mapbox/mapbox-gl-directions/issues/157
import { DarkModeContext } from "../context/DarkModeContext";

const Map = ({ mapRef }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: "map",
      style: isDarkMode
        ? "mapbox://styles/mapbox/dark-v10"
        : "mapbox://styles/mapbox/satellite-streets-v11",
      center: [75.88104, 22.76251],
      zoom: 15,
    });

    const navigationControls = new mapboxgl.NavigationControl();
    mapRef.current.addControl(navigationControls, "top-left");

    const directionsControl = new Directions({
      accessToken: mapboxgl.accessToken,
      unit: "imperial",
    });

    mapRef.current.addControl(directionsControl, "top-left");

    directionsControl.setOrigin([75.88104, 22.76251]);

    mapRef.current.on("load", function () {});

    return () => mapRef.current.remove();
  }, [mapRef, isDarkMode]);

  const addLineBetweenPoints = (map, start, end) => {
    const lineData = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [start, end],
      },
    };

    if (!mapRef.current.getLayer("route")) {
      mapRef.current.addSource("route", {
        type: "geojson",
        data: lineData,
      });
    } else {
      mapRef.current.getSource("route").setData(lineData);
    }
  };

  return <div id="map"></div>;
};

export default Map;
