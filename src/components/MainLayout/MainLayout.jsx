import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container min-h-[calc(100vh-180px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;