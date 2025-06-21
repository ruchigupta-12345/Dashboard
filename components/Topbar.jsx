import React from 'react';
import '../styles/App.css';

function Topbar() {
  return (
    <div className="topbar">
      <h4>Welcome Admin</h4>
      <div className="topbar-actions">
        <button>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Topbar;