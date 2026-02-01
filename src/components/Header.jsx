import React from 'react';
import './Header.css';

function Header({ stats, sidebarView, onViewChange, searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">
          <span className="logo-icon">🌲</span>
          <h1>Vancouver Green Pulse</h1>
        </div>
        <p className="header-tagline">Discover & celebrate our thriving green spaces</p>
      </div>

      <div className="header-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.totalTreesPlanted.toLocaleString()}</span>
          <span className="stat-label">Trees Planted</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.completedProjects}</span>
          <span className="stat-label">Projects Done</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.inProgressProjects}</span>
          <span className="stat-label">In Progress</span>
        </div>
      </div>

      <div className="header-search">
        <input
          type="text"
          placeholder="Search green spaces..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <nav className="header-nav">
        <button
          className={`nav-btn ${sidebarView === 'discovery' ? 'active' : ''}`}
          onClick={() => onViewChange('discovery')}
        >
          Explore
        </button>
        <button
          className={`nav-btn ${sidebarView === 'growth' ? 'active' : ''}`}
          onClick={() => onViewChange('growth')}
        >
          Growth Feed
        </button>
      </nav>
    </header>
  );
}

export default Header;
