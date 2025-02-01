import { useEffect, useRef } from "react";
import CustomControl from "./CustomControl";

const Navigation = ({ mapRef, navigationCtrlRef }) => {
  useEffect(() => {
    if (mapRef.current && !navigationCtrlRef.current) {
      navigationCtrlRef.current = new CustomControl(
        () => <NavigationControl mapRef={mapRef} />,
        {
          mapRef,
        },
      );
      mapRef.current.addControl(navigationCtrlRef.current, "top-left");
    }

    return () => {
      if (mapRef.current && navigationCtrlRef.current) {
        mapRef.current.removeControl(navigationCtrlRef.current);
        navigationCtrlRef.current = null; // Reset the ref
      }
    };
  }, [mapRef]);

  return null;
};

const NavigationControl = ({ mapRef }) => {
  return <div>Navigation Control</div>;
};

export default Navigation;
