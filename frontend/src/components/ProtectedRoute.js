import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const { user } = useAuth();

  // Check if the user is authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check if the user has the required role
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Render the protected component
  return <Component {...rest} />;
};

export default ProtectedRoute;
