import React from 'react';
import '../styles/App.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-widgets">
        <div className="widget users">
          <h4>Total Users</h4>
          <p>1,024</p>
        </div>
        <div className="widget revenue">
          <h4>Revenue</h4>
          <p>$18,200</p>
        </div>
        <div className="widget orders">
          <h4>Orders</h4>
          <p>312</p>
        </div>
        <div className="widget tasks">
          <h4>Tasks Completion</h4>
          <p>45%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;