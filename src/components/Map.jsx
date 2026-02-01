import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix for default marker icons in Leaflet with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icon for green spaces
const createGreenSpaceIcon = (type, isSelected) => {
  const iconMap = {
    'park': { emoji: '🌳', color: '#2d6a4f' },
    'garden': { emoji: '🌸', color: '#d4a5a5' },
    'forest': { emoji: '🌲', color: '#1a4d2e' },
    'beach': { emoji: '🏖️', color: '#4a90a4' },
    'waterfront': { emoji: '🌊', color: '#4a90a4' },
    'community-garden': { emoji: '🥕', color: '#8b6914' },
    'ravine': { emoji: '🍃', color: '#40916c' }
  };

  const { emoji, color } = iconMap[type] || { emoji: '🌿', color: '#2d6a4f' };
  const size = isSelected ? 40 : 32;

  return L.divIcon({
    className: `green-space-marker ${isSelected ? 'selected' : ''}`,
    html: `
      <div class="marker-container" style="
        width: ${size}px;
        height: ${size}px;
        background: ${isSelected ? color : 'white'};
        border: 3px solid ${color};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${size * 0.5}px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};
        transition: all 0.2s ease;
      ">
        ${emoji}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
};

// Custom icon for growth projects (tree + plus sign)
const createGrowthIcon = (type, status, isSelected) => {
  const typeColors = {
    'tree-planting': '#2d6a4f',
    'green-roof': '#40916c',
    'rewilding': '#1a4d2e',
    'community-garden': '#8b6914',
    'green-infrastructure': '#4a90a4'
  };

  const statusBadge = {
    'completed': { bg: '#95d5b2', text: 'Done' },
    'in-progress': { bg: '#ffd93d', text: 'Active' },
    'planned': { bg: '#a0c4ff', text: 'Soon' }
  };

  const color = typeColors[type] || '#2d6a4f';
  const badge = statusBadge[status] || statusBadge['planned'];
  const size = isSelected ? 44 : 36;

  return L.divIcon({
    className: `growth-marker ${isSelected ? 'selected' : ''}`,
    html: `
      <div class="growth-marker-container" style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
      ">
        <div style="
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(135deg, ${color}, ${color}dd);
          border: 3px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${size * 0.45}px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25);
          transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};
          transition: all 0.2s ease;
        ">
          🌱
        </div>
        <div style="
          position: absolute;
          top: -4px;
          right: -4px;
          background: white;
          color: ${color};
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        ">+</div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
};

// Component to handle map center changes
function MapController({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo([center.lat, center.lng], 15, {
        duration: 1
      });
    }
  }, [center, map]);

  return null;
}

function Map({
  greenSpaces,
  growthProjects,
  selectedSpace,
  selectedProject,
  userLocation,
  communityPhotos,
  onSpaceSelect,
  onProjectSelect,
  mapCenter
}) {
  // Vancouver center coordinates
  const vancouverCenter = [49.2827, -123.1207];

  return (
    <div className="map-wrapper">
      <MapContainer
        center={vancouverCenter}
        zoom={12}
        className="map-container"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <MapController center={mapCenter} />

        {/* Green space markers */}
        {greenSpaces.map(space => (
          <Marker
            key={space.id}
            position={[space.lat, space.lng]}
            icon={createGreenSpaceIcon(space.type, selectedSpace?.id === space.id)}
            eventHandlers={{
              click: () => onSpaceSelect(space)
            }}
          >
            <Popup>
              <div className="popup-content">
                <h3>{space.name}</h3>
                <p className="popup-type">{space.type}</p>
                <p className="popup-desc">{space.description.slice(0, 100)}...</p>
                <button
                  className="popup-btn"
                  onClick={() => onSpaceSelect(space)}
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Growth project markers */}
        {growthProjects.map(project => (
          <Marker
            key={project.id}
            position={[project.lat, project.lng]}
            icon={createGrowthIcon(project.type, project.status, selectedProject?.id === project.id)}
            eventHandlers={{
              click: () => onProjectSelect(project)
            }}
          >
            <Popup>
              <div className="popup-content growth-popup">
                <div className="popup-badge">{project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In Progress' : 'Planned'}</div>
                <h3>{project.title}</h3>
                <p className="popup-type">{project.type.replace('-', ' ')}</p>
                <p className="popup-impact">{project.impact}</p>
                <button
                  className="popup-btn growth-btn"
                  onClick={() => onProjectSelect(project)}
                >
                  Learn More
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User location marker */}
        {userLocation && (
          <CircleMarker
            center={[userLocation.lat, userLocation.lng]}
            radius={10}
            pathOptions={{
              color: '#4a90a4',
              fillColor: '#4a90a4',
              fillOpacity: 0.8
            }}
          >
            <Popup>You are here</Popup>
          </CircleMarker>
        )}

        {/* Community photo markers */}
        {communityPhotos.map(photo => (
          <Marker
            key={photo.id}
            position={[photo.lat, photo.lng]}
            icon={L.divIcon({
              className: 'photo-marker',
              html: `
                <div style="
                  width: 28px;
                  height: 28px;
                  background: white;
                  border: 2px solid #c9a227;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 14px;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                ">📷</div>
              `,
              iconSize: [28, 28],
              iconAnchor: [14, 14]
            })}
          >
            <Popup>
              <div className="photo-popup">
                <p className="photo-caption">{photo.caption}</p>
                <p className="photo-date">{new Date(photo.timestamp).toLocaleDateString()}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map legend */}
      <div className="map-legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <span className="legend-icon">🌳</span>
          <span>Parks</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">🌲</span>
          <span>Forests</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">🌸</span>
          <span>Gardens</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">🏖️</span>
          <span>Beaches</span>
        </div>
        <div className="legend-item growth-legend">
          <span className="legend-icon">🌱<sup>+</sup></span>
          <span>New Growth</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
