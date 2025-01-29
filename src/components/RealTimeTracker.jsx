import { useEffect, useState } from "react";
import L from "leaflet";
import { getCurrentLocation } from "../utils/location";

const RealTimeTracker = ({ mapRef, markerRef, onClick }) => {
  const [trackerLocation, setTrackerLocation] = useState({});
  const [locationPermission, setLocationPermission] = useState(null);

  const fetchLocation = async () => {
    try {
      const position = await getCurrentLocation();

      if (position && position.coords) {
        if (locationPermission === null) {
          setLocationPermission(true);
        }

        if (!markerRef.current) {
          markerRef.current = L.circle(
            [position.coords.latitude, position.coords.longitude],
            {
              radius: position.coords.accuracy,
              color: "#27187E",
              fillColor: "#27187E",
              fillOpacity: 0.5,
            },
          ).addTo(mapRef.current);

          markerRef.current.on("click", (e) => {
            if (onClick)
              onClick(e, position.coords.latitude, position.coords.longitude);
          });
        } else {
          markerRef.current.setLatLng([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          markerRef.current.setRadius(position.coords.accuracy);
        }

        setTrackerLocation(position.coords);
      } else {
        console.error("Invalid position data:", position);
        if (locationPermission === null) {
          setLocationPermission(false); // Location denied
        }
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      if (locationPermission === null) {
        setLocationPermission(false); // Location denied
      }
    }
  };

  useEffect(() => {
    if (locationPermission === false) return; // Don't run if permission is denied

    const interval = setInterval(() => {
      // Real-time tracking simulation: updating the location every second
      // setTrackerLocation((prevLocation) => {
      //   const newLat = prevLocation.lat + (Math.random() * 0.001 - 0.0005); // Random change in lat
      //   const newLng = prevLocation.lng + (Math.random() * 0.001 - 0.0005); // Random change in lng
      //   return { ...prevLocation, lat: newLat, lng: newLng };
      // });

      // Keep updating real-time position if location is available
      if (
        markerRef.current &&
        trackerLocation.latitude !== undefined &&
        trackerLocation.longitude !== undefined
      ) {
        markerRef.current.setLatLng([
          trackerLocation.latitude,
          trackerLocation.longitude,
        ]);
        markerRef.current.on("click", (e) => {
          if (onClick)
            onClick(e, trackerLocation.latitude, trackerLocation.longitude);
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [trackerLocation, locationPermission, markerRef, onClick]);
  useEffect(() => {
    fetchLocation();
  }, []);
  return null;
};

export default RealTimeTracker;
