import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // posisi lokasi (latitude, longitude)
  const location = { lat: -6.2088, lng: 106.8456 }; // Jakarta

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={location}
        zoom={15}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
