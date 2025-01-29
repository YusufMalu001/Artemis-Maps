import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const StyleButtons = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div id="styleButtons">
      <button id="satelliteButton">Satellite</button>
      <button id="terrainButton">Terrain</button>
      <button id="streetViewButton">Street View</button>
      <button id="toggleDarkMode" onClick={toggleDarkMode}>
        Dark Mode
      </button>
    </div>
  );
};

export default StyleButtons;
