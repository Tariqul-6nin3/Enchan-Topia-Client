import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const DashboardHome = () => {
  // Sample data for the bar chart
  const data = [
    { name: "Jan", uv: 403, pv: 2400, amt: 240 },
    { name: "Feb", uv: 300, pv: 1398, amt: 210 },
    { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 270, pv: 3908, amt: 200 },
    { name: "May", uv: 180, pv: 4800, amt: 281 },
    { name: "Jun", uv: 230, pv: 3800, amt: 200 },
    { name: "Jul", uv: 390, pv: 4300, amt: 200 },
  ];

  // Sample data for the map
  const markers = [
    { name: "Location 1", lat: 51.505, lon: -0.09 },
    { name: "Location 2", lat: 51.51, lon: -0.1 },
    { name: "Location 3", lat: 51.515, lon: -0.095 },
  ];

  return (
    <div className="flex  flex-col md:flex-row gap-4">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg text-center font-semibold mb-2">
          Class Sales Report
        </h2>
        <ResponsiveContainer width={700} height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Map */}
      {/* <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Locations</h2>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "300px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lon]}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div> */}

      {/* Other Information */}
    </div>
  );
};

export default DashboardHome;
