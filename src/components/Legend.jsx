import { useEffect, useRef } from "react";
import CustomControl from "./CustomControl";

const Legend = ({ mapRef, legendCtrlRef }) => {
  useEffect(() => {
    if (mapRef.current && !legendCtrlRef.current) {
      legendCtrlRef.current = new CustomControl(
        () => <LegendControl mapRef={mapRef} />,
        {
          mapRef,
        },
      );
      mapRef.current.addControl(legendCtrlRef.current, "top-left");
    }

    return () => {
      if (mapRef.current && legendCtrlRef.current) {
        mapRef.current.removeControl(legendCtrlRef.current);
        legendCtrlRef.current = null; // Reset the ref
      }
    };
  }, [mapRef]);

  return null;
};

const LegendControl = ({ mapRef }) => {
  return <div>Legend Control</div>;
};

export default Legend;
