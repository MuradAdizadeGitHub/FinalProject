import React from "react";
import AdminNavbar from "../../components/Navbar/Admin/AdminNavbar";
import { Outlet } from "react-router-dom";

function Adminlayout() {
  return (
    <>
      <AdminNavbar></AdminNavbar>
    <Outlet></Outlet>
    </>
  );
}

export default Adminlayout;
