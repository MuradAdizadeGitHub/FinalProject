import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Otherlayout() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>
</>
  )
}

export default Otherlayout
