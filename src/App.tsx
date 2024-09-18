import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashborad';
import Sobre from './pages/sobre';
import { ContextDashboard } from './context/contextDashboard';
import { DashboardService } from './utils/DashboardService';

function App() {

  const dashboardService = new DashboardService();

  const renderButtons = () => {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="/sobre">About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  return (
    <Router>
      {renderButtons()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <ContextDashboard.Provider value={{ dashboardService }}>
            <Dashboard />
          </ContextDashboard.Provider>
        } />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App;
