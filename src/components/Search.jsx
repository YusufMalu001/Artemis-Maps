import { useEffect, useRef } from "react";
import CustomControl from "./CustomControl";

const Search = ({ mapRef, searchCtrlRef }) => {
  useEffect(() => {
    if (mapRef.current && !searchCtrlRef.current) {
      searchCtrlRef.current = new CustomControl(() => <SearchControl />, {
        mapRef,
      });
      mapRef.current.addControl(searchCtrlRef.current, "top-left");
    }

    return () => {
      if (mapRef.current && searchCtrlRef.current) {
        mapRef.current.removeControl(searchCtrlRef.current);
        searchCtrlRef.current = null; // Reset the ref
      }
    };
  }, [mapRef]);

  return null;
};

const SearchControl = () => {
  return <div>Search Control</div>;
};

export default Search;
