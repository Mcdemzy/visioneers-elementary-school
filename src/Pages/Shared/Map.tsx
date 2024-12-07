import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const purpleIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
  iconSize: [32, 32],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});

const Map = () => {
  const leadCityCoords: [number, number] = [7.4223, 3.9076];

  return (
    <div className="relative h-96 w-full lg:px-36 px-9">
      <MapContainer
        center={leadCityCoords}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
        className="rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={leadCityCoords} icon={purpleIcon}>
          <Popup>
            <span>Lead City University - Our School Location</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
