import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;

        if (mapRef.current) mapRef.current.setView([latitude, longitude], 100);
      });
    }
  }, []);

  return (
    <div>
      <MapContainer
        ref={mapRef}
        center={[51.505, 0.09]}
        zoom={100}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
        "
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap <a/> contributor'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
