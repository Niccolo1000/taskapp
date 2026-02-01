import React, { useState, useCallback } from 'react';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import FindGreenButton from './components/FindGreenButton';
import Header from './components/Header';
import PhotoUploadModal from './components/PhotoUploadModal';
import { greenSpaces } from './data/greenSpaces';
import { growthProjects, getGrowthStats } from './data/growthProjects';
import './App.css';

function App() {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sidebarView, setSidebarView] = useState('discovery'); // 'discovery', 'growth', 'details'
  const [userLocation, setUserLocation] = useState(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoTarget, setPhotoTarget] = useState(null);
  const [communityPhotos, setCommunityPhotos] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = getGrowthStats();

  const handleSpaceSelect = useCallback((space) => {
    setSelectedSpace(space);
    setSelectedProject(null);
    setSidebarView('details');
  }, []);

  const handleProjectSelect = useCallback((project) => {
    setSelectedProject(project);
    setSelectedSpace(null);
    setSidebarView('details');
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedSpace(null);
    setSelectedProject(null);
    setSidebarView('discovery');
  }, []);

  const handleFindGreen = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userLoc);

          // Find nearest green space
          let nearest = null;
          let minDistance = Infinity;

          greenSpaces.forEach(space => {
            const distance = getDistance(userLoc, space);
            if (distance < minDistance) {
              minDistance = distance;
              nearest = space;
            }
          });

          if (nearest) {
            setSelectedSpace(nearest);
            setSidebarView('details');
            setMapCenter({ lat: nearest.lat, lng: nearest.lng });
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  const handlePhotoUpload = useCallback((target) => {
    setPhotoTarget(target);
    setShowPhotoModal(true);
  }, []);

  const handlePhotoSubmit = useCallback((photoData) => {
    const newPhoto = {
      id: Date.now(),
      ...photoData,
      timestamp: new Date().toISOString()
    };
    setCommunityPhotos(prev => [newPhoto, ...prev]);
    setShowPhotoModal(false);
    setPhotoTarget(null);
  }, []);

  const handleNavigateToSpace = useCallback((space) => {
    setMapCenter({ lat: space.lat, lng: space.lng });
    setSelectedSpace(space);
    setSidebarView('details');
  }, []);

  const handleNavigateToProject = useCallback((project) => {
    setMapCenter({ lat: project.lat, lng: project.lng });
    setSelectedProject(project);
    setSidebarView('details');
  }, []);

  // Calculate distance between two points in km
  const getDistance = (point1, point2) => {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(point2.lat - point1.lat);
    const dLng = toRad(point2.lng - point1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(point1.lat)) * Math.cos(toRad(point2.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (deg) => deg * (Math.PI / 180);

  return (
    <div className="app">
      <Header
        stats={stats}
        sidebarView={sidebarView}
        onViewChange={setSidebarView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="app-content">
        <Sidebar
          view={sidebarView}
          selectedSpace={selectedSpace}
          selectedProject={selectedProject}
          greenSpaces={greenSpaces}
          growthProjects={growthProjects}
          stats={stats}
          communityPhotos={communityPhotos}
          onSpaceSelect={handleNavigateToSpace}
          onProjectSelect={handleNavigateToProject}
          onBack={handleBackToList}
          onPhotoUpload={handlePhotoUpload}
          userLocation={userLocation}
          searchQuery={searchQuery}
        />

        <Map
          greenSpaces={greenSpaces}
          growthProjects={growthProjects}
          selectedSpace={selectedSpace}
          selectedProject={selectedProject}
          userLocation={userLocation}
          communityPhotos={communityPhotos}
          onSpaceSelect={handleSpaceSelect}
          onProjectSelect={handleProjectSelect}
          mapCenter={mapCenter}
        />
      </div>

      <FindGreenButton onClick={handleFindGreen} />

      {showPhotoModal && (
        <PhotoUploadModal
          target={photoTarget}
          greenSpaces={greenSpaces}
          onSubmit={handlePhotoSubmit}
          onClose={() => {
            setShowPhotoModal(false);
            setPhotoTarget(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
