import React, { useState } from 'react';
import './PhotoUploadModal.css';

function PhotoUploadModal({ target, customLocation, greenSpaces, onSubmit, onClose }) {
  const [selectedSpace, setSelectedSpace] = useState(target?.id || '');
  const [customName, setCustomName] = useState('');
  const [caption, setCaption] = useState('');
  const [updateType, setUpdateType] = useState(customLocation ? 'new-spot' : 'photo');

  const isCustomLocation = !!customLocation;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCustomLocation) {
      // New custom spot
      onSubmit({
        spaceId: null,
        spaceName: customName || 'Unnamed Green Spot',
        lat: customLocation.lat,
        lng: customLocation.lng,
        caption,
        updateType,
        isCustomSpot: true
      });
    } else {
      // Existing space
      const space = greenSpaces.find(s => s.id === parseInt(selectedSpace));
      if (!space) return;

      onSubmit({
        spaceId: space.id,
        spaceName: space.name,
        lat: space.lat,
        lng: space.lng,
        caption,
        updateType
      });
    }
  };

  const updateTypes = isCustomLocation ? [
    { value: 'new-spot', label: 'New Green Spot', icon: '🌿' },
    { value: 'hidden-gem', label: 'Hidden Gem', icon: '💎' },
    { value: 'community-garden', label: 'Community Garden', icon: '🥕' },
    { value: 'wildlife', label: 'Wildlife Spot', icon: '🦅' },
    { value: 'tree-planting', label: 'New Trees', icon: '🌳' }
  ] : [
    { value: 'photo', label: 'Photo', icon: '📷' },
    { value: 'bloom', label: 'Bloom Alert', icon: '🌸' },
    { value: 'wildlife', label: 'Wildlife Sighting', icon: '🦅' },
    { value: 'seasonal', label: 'Seasonal Update', icon: '🍂' },
    { value: 'event', label: 'Community Event', icon: '🎉' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <span className="modal-icon">{isCustomLocation ? '🌿' : '📷'}</span>
          <h2>{isCustomLocation ? 'Add a Green Spot' : 'Share an Update'}</h2>
          <p>{isCustomLocation
            ? 'Help others discover a green space that\'s not on the map yet'
            : 'Help others discover what\'s happening in Vancouver\'s green spaces'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {isCustomLocation ? (
            <div className="form-group">
              <label>Name this spot</label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="e.g., Little garden on Oak Street, Hidden park behind library..."
                required
                className="text-input"
              />
              <span className="location-hint">
                Location: {customLocation.lat.toFixed(4)}, {customLocation.lng.toFixed(4)}
              </span>
            </div>
          ) : (
            <div className="form-group">
              <label>Location</label>
              <select
                value={selectedSpace}
                onChange={(e) => setSelectedSpace(e.target.value)}
                required
              >
                <option value="">Select a green space...</option>
                {greenSpaces.map(space => (
                  <option key={space.id} value={space.id}>
                    {space.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label>{isCustomLocation ? 'What kind of spot is this?' : 'What kind of update?'}</label>
            <div className="update-types">
              {updateTypes.map(type => (
                <button
                  key={type.value}
                  type="button"
                  className={`type-btn ${updateType === type.value ? 'active' : ''}`}
                  onClick={() => setUpdateType(type.value)}
                >
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-label">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>{isCustomLocation ? 'Describe this spot' : 'Your message'}</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder={
                isCustomLocation
                  ? "Describe what makes this spot special..."
                  : updateType === 'bloom' ? "The cherry blossoms are at peak bloom!"
                  : updateType === 'wildlife' ? "Spotted a great blue heron near the pond!"
                  : updateType === 'seasonal' ? "Beautiful fall colors on the maple trees"
                  : updateType === 'event' ? "Community cleanup happening this Saturday!"
                  : "Share what you're seeing..."
              }
              required
              rows={3}
            />
          </div>

          <div className="form-note">
            <span className="note-icon">💡</span>
            <p>{isCustomLocation
              ? "Your spot will appear on the map for others to discover! This helps build a community map of Vancouver's green spaces."
              : "In a future version, you'll be able to attach photos directly. For now, your text update will appear on the map and help others!"}</p>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {isCustomLocation ? 'Add to Map' : 'Share Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PhotoUploadModal;
