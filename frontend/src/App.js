import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Admin from './pages/Admin';
import Bookings from './pages/Bookings';
import Feedback from './pages/Feedback';
import SearchParking from './pages/SearchParking';
import Login from './pages/login';
import Register from './pages/Register';
import OwnerPage from './pages/Owner';
import SearchResults from './pages/Search';
import NavBar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div className="container mx-auto mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<SearchParking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feedback" element={<Feedback />} />

            {/* Protected Routes */}
            <Route
              path="/admin"
              element={<ProtectedRoute element={Admin} allowedRoles={['admin']} />}
            />
            <Route
              path="/bookings"
              element={<ProtectedRoute element={Bookings} allowedRoles={['driver']} />}
            />
            <Route
              path="/search-results"
              element={<ProtectedRoute element={SearchResults} allowedRoles={['driver']} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
