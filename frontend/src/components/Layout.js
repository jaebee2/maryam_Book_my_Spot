// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';  // Assuming the Navbar is in src/components/Navbar.js
import Footer from './Footer';  // You will create the Footer component
import { Outlet } from 'react-router-dom';  // For nested routing

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Nested page content will appear here */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
