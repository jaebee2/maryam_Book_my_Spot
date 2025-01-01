import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User will hold the authenticated user data

  // Simulate login (you can replace this with your real authentication logic)
  const login = (username, role) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
