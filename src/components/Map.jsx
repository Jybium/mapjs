import React, { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

// import { MapContainer, TileLayer } from "react-leaflet";

// import { Map } from "@googlemaps/react-wrapper";

// import googleMapReact from "google-map-react";

// const GoogleMap = googleMapReact;

const Mapper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVBRpXp9XL78sy4Ct5aBvHENRKpX7eMfw",
  });

  if (!isLoaded) return <div>Loading .... </div>;

  // const mapRef = useRef(null);
  // const Location = useRef(null);

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { longitude, latitude } = position.coords;

  //       if (mapRef.current) mapRef.current.setView([latitude, longitude], 13);
  //       Location.current = [latitude, longitude];
  //     });
  //   }
  // }, []);

  return (
    // <MapContainer
    //   ref={mapRef}
    //   center={[51.505, 0.09]}
    //   zoom={13}
    //   style={{ height: "50%", width: "100%" }}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    //     "
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap <a/> contributor'
    //   />
    // </MapContainer>

    // <div style={{ width: "100%", height: "100%" }}>
    //   <GoogleMap
    //     bootstrapURLKeys="AIzaSyDVBRpXp9XL78sy4Ct5aBvHENRKpX7eMfw"
    //     defaultZoom={8}
    //     defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    //   ></GoogleMap>
    // </div>

    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerStyle={{ height: "100vh", width: "100%" }}
      >
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
    </div>
  );
};

export default Mapper;
