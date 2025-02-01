// import RealTimeTracker from "../components/RealTimeTracker";
import ThemeToggle from "../components/ThemeToggle";
import StyleButtons from "../components/StyleButtons";
import Map from "../components/Map";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import Legend from "../components/Legend";
import Search from "../components/Search";
const DemoPage = () => {
  const [points, setPoints] = useState([]);
  const mapRef = useRef(null); // Shared map reference
  const markersRef = useRef([]); // For multiple user-added markers
  const currentLocationRef = useRef(null); // Shared ref for the real-time tracker's marker
  const searchCtrlRef = useRef(null); // Shared ref for the search input
  const legendCtrlRef = useRef(null);
  const navigationCtrlRef = useRef(null);
  const zoomCtrlRef = useRef(null);

  return (
    <div className="demo-page">
      <ThemeToggle />
      <StyleButtons />
      <Map mapRef={mapRef} />
      <Navigation mapRef={mapRef} navigationCtrlRef={navigationCtrlRef} />
      <Legend mapRef={mapRef} legendCtrlRef={legendCtrlRef} />
      <Search mapRef={mapRef} searchCtrlRef={searchCtrlRef} />
      {/* <RealTimeTracker */}
      {/*     mapRef={mapRef} */}
      {/*     markerRef={currentLocationRef} */}
      {/*     onClick={focusOnPoint} */}
      {/* /> */}
    </div>
  );
};

export default DemoPage;
