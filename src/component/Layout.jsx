import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../tools/Header';
import Footer from '../tools/Footer';
import Navbar from '../tools/Navbar';
export default function Layout() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

        