import React, { useState } from 'react';
import './PhotoUploadModal.css';

function PhotoUploadModal({ target, greenSpaces, onSubmit, onClose }) {
  const [selectedSpace, setSelectedSpace] = useState(target?.id || '');
  const [caption, setCaption] = useState('');
  const [updateType, setUpdateType] = useState('photo');

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  const updateTypes = [
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
          <span className="modal-icon">📷</span>
          <h2>Share an Update</h2>
          <p>Help others discover what's happening in Vancouver's green spaces</p>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div className="form-group">
            <label>What kind of update?</label>
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
            <label>Your message</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder={
                updateType === 'bloom' ? "The cherry blossoms are at peak bloom!" :
                updateType === 'wildlife' ? "Spotted a great blue heron near the pond!" :
                updateType === 'seasonal' ? "Beautiful fall colors on the maple trees" :
                updateType === 'event' ? "Community cleanup happening this Saturday!" :
                "Share what you're seeing..."
              }
              required
              rows={3}
            />
          </div>

          <div className="form-note">
            <span className="note-icon">💡</span>
            <p>In a future version, you'll be able to attach photos directly. For now, your text update will appear on the map and help others!</p>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Share Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PhotoUploadModal;
