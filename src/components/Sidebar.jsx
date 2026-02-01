import React, { useState, useMemo } from 'react';
import './Sidebar.css';

function Sidebar({
  view,
  selectedSpace,
  selectedProject,
  greenSpaces,
  growthProjects,
  stats,
  communityPhotos,
  onSpaceSelect,
  onProjectSelect,
  onBack,
  onPhotoUpload,
  onAddNewSpot,
  userLocation,
  searchQuery
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Filter spaces based on search query
  const filteredSpaces = useMemo(() => {
    if (!searchQuery) return greenSpaces;
    const query = searchQuery.toLowerCase();
    return greenSpaces.filter(space =>
      space.name.toLowerCase().includes(query) ||
      space.type.toLowerCase().includes(query) ||
      space.vibes.some(v => v.toLowerCase().includes(query)) ||
      space.description.toLowerCase().includes(query)
    );
  }, [greenSpaces, searchQuery]);

  // Calculate distance from user
  const getDistanceFromUser = (space) => {
    if (!userLocation) return null;
    const R = 6371;
    const dLat = toRad(space.lat - userLocation.lat);
    const dLng = toRad(space.lng - userLocation.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(userLocation.lat)) * Math.cos(toRad(space.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };

  const toRad = (deg) => deg * (Math.PI / 180);

  // Get type icon
  const getTypeIcon = (type) => {
    const icons = {
      'park': '🌳',
      'garden': '🌸',
      'forest': '🌲',
      'beach': '🏖️',
      'waterfront': '🌊',
      'community-garden': '🥕',
      'ravine': '🍃'
    };
    return icons[type] || '🌿';
  };

  // Get project type icon
  const getProjectTypeIcon = (type) => {
    const icons = {
      'tree-planting': '🌳',
      'green-roof': '🏢',
      'rewilding': '🦋',
      'community-garden': '🥕',
      'green-infrastructure': '💧'
    };
    return icons[type] || '🌱';
  };

  // Render space details view
  const renderSpaceDetails = () => (
    <div className="details-view">
      <button className="back-btn" onClick={onBack}>
        ← Back to list
      </button>

      <div className="details-header">
        <span className="details-icon">{getTypeIcon(selectedSpace.type)}</span>
        <div>
          <h2>{selectedSpace.name}</h2>
          <span className="details-type">{selectedSpace.type}</span>
        </div>
      </div>

      <p className="details-description">{selectedSpace.description}</p>

      <div className="details-section">
        <h3>Size</h3>
        <p>{selectedSpace.size}</p>
      </div>

      <div className="details-section">
        <h3>Vibes</h3>
        <div className="vibe-tags">
          {selectedSpace.vibes.map(vibe => (
            <span key={vibe} className="vibe-tag">{vibe}</span>
          ))}
        </div>
      </div>

      <div className="details-section">
        <h3>Highlights</h3>
        <ul className="highlights-list">
          {selectedSpace.highlights.map(highlight => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="details-section">
        <h3>Best Seasons</h3>
        <div className="season-tags">
          {selectedSpace.bestSeasons.map(season => (
            <span key={season} className="season-tag">{season}</span>
          ))}
        </div>
      </div>

      {/* Community photos for this space */}
      {communityPhotos.filter(p => p.spaceId === selectedSpace.id).length > 0 && (
        <div className="details-section">
          <h3>Community Photos</h3>
          <div className="community-photos">
            {communityPhotos
              .filter(p => p.spaceId === selectedSpace.id)
              .map(photo => (
                <div key={photo.id} className="community-photo">
                  <p className="photo-caption">{photo.caption}</p>
                  <span className="photo-date">
                    {new Date(photo.timestamp).toLocaleDateString()}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      )}

      <button
        className="photo-upload-btn"
        onClick={() => onPhotoUpload(selectedSpace)}
      >
        📷 Share a photo or update
      </button>
    </div>
  );

  // Render project details view
  const renderProjectDetails = () => (
    <div className="details-view project-details">
      <button className="back-btn" onClick={onBack}>
        ← Back to list
      </button>

      <div className="details-header">
        <span className="details-icon growth-icon">🌱</span>
        <div>
          <h2>{selectedProject.title}</h2>
          <span className={`project-status status-${selectedProject.status}`}>
            {selectedProject.status === 'completed' ? 'Completed' :
             selectedProject.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </span>
        </div>
      </div>

      <p className="details-description">{selectedProject.description}</p>

      <div className="project-impact">
        <h3>Impact</h3>
        <p>{selectedProject.impact}</p>
      </div>

      <div className="project-meta">
        <div className="meta-item">
          <span className="meta-label">Type</span>
          <span className="meta-value">
            {getProjectTypeIcon(selectedProject.type)} {selectedProject.type.replace(/-/g, ' ')}
          </span>
        </div>

        <div className="meta-item">
          <span className="meta-label">Organization</span>
          <span className="meta-value">{selectedProject.organization}</span>
        </div>

        <div className="meta-item">
          <span className="meta-label">Started</span>
          <span className="meta-value">{selectedProject.dateStarted}</span>
        </div>

        {selectedProject.completedDate && (
          <div className="meta-item">
            <span className="meta-label">Completed</span>
            <span className="meta-value">{selectedProject.completedDate}</span>
          </div>
        )}

        {selectedProject.expectedCompletion && (
          <div className="meta-item">
            <span className="meta-label">Expected Completion</span>
            <span className="meta-value">{selectedProject.expectedCompletion}</span>
          </div>
        )}

        {selectedProject.treesPlanted && (
          <div className="meta-item highlight-stat">
            <span className="meta-label">Trees Planted</span>
            <span className="meta-value trees-count">{selectedProject.treesPlanted}</span>
          </div>
        )}

        {selectedProject.greenRoofArea && (
          <div className="meta-item highlight-stat">
            <span className="meta-label">Green Roof Area</span>
            <span className="meta-value">{selectedProject.greenRoofArea}</span>
          </div>
        )}
      </div>
    </div>
  );

  // Render discovery view (green spaces list)
  const renderDiscoveryView = () => (
    <div className="discovery-view">
      <div className="view-header">
        <h2>Green Spaces</h2>
        <span className="count">{filteredSpaces.length} places</span>
      </div>

      {searchQuery && filteredSpaces.length === 0 && (
        <div className="no-results">
          <p>No green spaces found for "{searchQuery}"</p>
          <p className="suggestion">Try searching for a park name, type (forest, garden), or vibe (quiet, waterfront)</p>
        </div>
      )}

      <div className="space-list">
        {filteredSpaces.map(space => (
          <div
            key={space.id}
            className="space-card"
            onClick={() => onSpaceSelect(space)}
          >
            <div className="space-card-icon">{getTypeIcon(space.type)}</div>
            <div className="space-card-content">
              <h3>{space.name}</h3>
              <span className="space-type">{space.type}</span>
              <div className="space-vibes">
                {space.vibes.slice(0, 3).map(vibe => (
                  <span key={vibe} className="mini-vibe">{vibe}</span>
                ))}
              </div>
              {userLocation && (
                <span className="distance">{getDistanceFromUser(space)} km away</span>
              )}
            </div>
            <span className="card-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Render growth feed view
  const renderGrowthView = () => (
    <div className="growth-view">
      <div className="view-header">
        <h2>Growth Feed</h2>
        <span className="subtitle">Vancouver is getting greener</span>
      </div>

      <div className="growth-summary">
        <div className="summary-stat">
          <span className="stat-icon">🌳</span>
          <span className="stat-value">{stats.totalTreesPlanted.toLocaleString()}</span>
          <span className="stat-desc">trees planted</span>
        </div>
        <div className="summary-stat">
          <span className="stat-icon">✅</span>
          <span className="stat-value">{stats.completedProjects}</span>
          <span className="stat-desc">projects completed</span>
        </div>
        <div className="summary-stat">
          <span className="stat-icon">🔨</span>
          <span className="stat-value">{stats.inProgressProjects}</span>
          <span className="stat-desc">in progress</span>
        </div>
      </div>

      <div className="project-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Completed</button>
        <button className="filter-btn">In Progress</button>
        <button className="filter-btn">Planned</button>
      </div>

      <div className="project-list">
        {growthProjects.map(project => (
          <div
            key={project.id}
            className={`project-card status-${project.status}`}
            onClick={() => onProjectSelect(project)}
          >
            <div className="project-card-header">
              <span className="project-type-icon">
                {getProjectTypeIcon(project.type)}
              </span>
              <span className={`project-status-badge ${project.status}`}>
                {project.status === 'completed' ? 'Done' :
                 project.status === 'in-progress' ? 'Active' : 'Planned'}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-impact-preview">{project.impact}</p>
            <div className="project-card-footer">
              <span className="project-org">{project.organization}</span>
              <span className="card-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Determine what to render
  const renderContent = () => {
    if (view === 'details') {
      if (selectedSpace) return renderSpaceDetails();
      if (selectedProject) return renderProjectDetails();
    }
    if (view === 'growth') return renderGrowthView();
    return renderDiscoveryView();
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <span className="toggle-icon">{isCollapsed ? '▲' : '▼'}</span>
        <span className="toggle-text">{isCollapsed ? 'Show Panel' : 'Hide Panel'}</span>
      </button>

      {!isCollapsed && (
        <>
          {renderContent()}
          <button className="add-spot-btn" onClick={onAddNewSpot}>
            + Add a Green Spot
          </button>
        </>
      )}
    </aside>
  );
}

export default Sidebar;
