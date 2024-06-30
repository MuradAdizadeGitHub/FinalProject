import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar'

function Layout() {
  return (
  <>
  <Topbar></Topbar>
  <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
  )
}

export default Layout
