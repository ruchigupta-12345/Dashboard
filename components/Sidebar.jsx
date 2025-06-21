import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Admin Dashboard</h3>
      <ul className="sidebar-menu">
        <li><NavLink to="/" exact activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/charts" activeClassName="active">Charts</NavLink></li>
        <li><NavLink to="/calendar" activeClassName="active">Calendar</NavLink></li>
        <li><NavLink to="/kanban" activeClassName="active">Kanban</NavLink></li>
        <li><NavLink to="/table" activeClassName="active">Table</NavLink></li>
        <li><NavLink to="/settings" activeClassName="active">Settings</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
