import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header';
import Footer from 'components/footer';

import './layout.css';

export default function Layout(props) {
  return (
    <>
      <Header />

      <div className="container-lg d-flex justify-content-center my-4">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
