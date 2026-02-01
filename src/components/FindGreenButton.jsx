import React, { useState } from 'react';
import './FindGreenButton.css';

function FindGreenButton({ onClick }) {
  const [isLocating, setIsLocating] = useState(false);

  const handleClick = () => {
    setIsLocating(true);
    onClick();
    // Reset after a delay (in case geolocation takes time)
    setTimeout(() => setIsLocating(false), 3000);
  };

  return (
    <button
      className={`find-green-btn ${isLocating ? 'locating' : ''}`}
      onClick={handleClick}
      disabled={isLocating}
      title="Find nearest green space"
    >
      <span className="btn-icon">{isLocating ? '📍' : '🌿'}</span>
      <span className="btn-text">
        {isLocating ? 'Finding...' : 'Find Green Near Me'}
      </span>
    </button>
  );
}

export default FindGreenButton;
