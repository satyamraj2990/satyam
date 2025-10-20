import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/common/ThemeToggle';
import { UserDashboard } from './components/user/UserDashboard';
import { StoreDashboard } from './components/store/StoreDashboard';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          {/* Navigation */}
          <nav className="nav-container">
            <div className="logo">MediTatva</div>
            
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Patient Dashboard
              </Link>
              <Link to="/store" className="nav-link">
                Store Dashboard
              </Link>
              <ThemeToggle />
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/store" element={<StoreDashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
