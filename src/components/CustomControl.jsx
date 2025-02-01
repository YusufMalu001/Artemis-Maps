import { createRoot } from "react-dom/client";

class CustomControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.classList.add("mapboxgl-ctrl", "mapboxgl-ctrl-group");
    this._root = createRoot(this._container); // Create a root for the container
    this._root.render(this._component); // Render the React component
    return this._container;
  }

  onRemove() {
    if (this._root) {
      // Defer unmounting to avoid the race condition
      queueMicrotask(() => {
        this._root.unmount(); // Unmount the React component
      });
    }
    this._container.remove();
    this._map = null;
  }

  constructor(Component, props) {
    this._component = <Component {...props} />; // Store the component with its props
  }
}

export default CustomControl;
