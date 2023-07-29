import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout