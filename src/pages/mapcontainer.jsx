import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = ({ profiles }) => {
  return (
    <div className='Map' style={{ height: '100%', width: '100%' }}>
      <LeafletMap center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {profiles.map((profile, id) => (
          <Marker key={id} position={profile.coordinates}>
            <Popup>
              <div>
                <h2>{profile.name}</h2>
                <p>{profile.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    </div>
  );
};

export default MapContainer;
