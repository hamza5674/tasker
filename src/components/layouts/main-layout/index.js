import React, { useState } from 'react';
import AsideNav from '../../asideNav';
import DashboardRoutes from '../../../containers/dashboard';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAsideNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div style={{ display: "flex" }}>
      {/* Aside Navigation */}
      <AsideNav isOpen={isOpen} toggleAsideNav={toggleAsideNav} />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: isOpen ? '190px' : '50px', transition: 'margin-left 0.5s ease' }}>
        <DashboardRoutes />
      </div>
    </div>
      
    </>
  );
};

export default MainLayout;



