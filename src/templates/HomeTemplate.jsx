import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
export default function HomeTemplate() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </div>
  )
}
