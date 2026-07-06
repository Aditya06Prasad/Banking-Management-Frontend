import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
