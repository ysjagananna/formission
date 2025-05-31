import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import MediaPage from './pages/MediaPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route 
        path="/login" 
        element={!isAuthenticated ? <LoginPage /> : <Navigate to={isAdmin ? '/admin' : '/'} />} 
      />
      <Route 
        path="/admin" 
        element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;