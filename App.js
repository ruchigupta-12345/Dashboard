import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Table from './pages/Table';
import Settings from './pages/Settings';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <Router>
        <Sidebar />
        <div className="content">
          <Topbar toggleTheme={() => setDark(!dark)} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/table" element={<Table />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;