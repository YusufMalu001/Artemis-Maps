// import RealTimeTracker from "../components/RealTimeTracker";
import ThemeToggle from "../components/ThemeToggle";
import StyleButtons from "../components/StyleButtons";
import Map from "../components/Map";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import ZoomControl from "../components/ZoomControl";
import Legend from "../components/Legend";
const DemoPage = () => {
  const [points, setPoints] = useState([]);
  const mapRef = useRef(null); // Shared map reference
  const markersRef = useRef([]); // For multiple user-added markers
  const currentLocationRef = useRef(null); // Shared ref for the real-time tracker's marker
  const routeControlRef = useRef(null);
  const handleMapClick = (latLng) => {
    setPoints([...points, latLng]);
  };

  // const icons = {
  //     defaultIcon: new L.Icon({
  //         iconUrl: require("leaflet/dist/images/marker-icon.png"),
  //         iconSize: [25, 41],
  //         iconAnchor: [12, 41],
  //         popupAnchor: [1, -34],
  //     }),
  //
  // }

  const focusOnPoint = (e, lat, lng) => {
    if (e.originalEvent) {
      e.originalEvent.stopPropagation();
    }
    mapRef.current.setView([lat, lng], 20, {
      animate: true,
      duration: 1.0,
    });
  };
  return (
    <div className="demo-page">
      <ThemeToggle />
      <StyleButtons />
      <Map mapRef={mapRef} />
      <Navigation mapRef={mapRef} />
      <Legend mapRef={mapRef} />
      <ZoomControl mapRef={mapRef} />
      {/* <RealTimeTracker */}
      {/*     mapRef={mapRef} */}
      {/*     markerRef={currentLocationRef} */}
      {/*     onClick={focusOnPoint} */}
      {/* /> */}
    </div>
  );
};

export default DemoPage;
