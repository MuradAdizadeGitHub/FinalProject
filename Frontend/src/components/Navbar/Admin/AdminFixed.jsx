import React from "react";
import "./AdminFixed.scss";
import { Link } from "react-router-dom";
function AdminFixed() {
  return (
    <>
      <section>
        <div className="adminnavbar">
          <div className="adminpageitems">
            <li>
              {" "}
              <Link to={"/admin/dashboard"}>DashBoard</Link>
            </li>

            <li>
              <Link to={"/admin/users"}>Users</Link>{" "}
            </li>

            <li>
              {" "}
              <Link to={"/admin/saraylar"}>WeddingPlace</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/restoranlar"}>Restaurants</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/fotovideo"}>Photo and Video</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/dj"}>DJ</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/aparici"}>Singer</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/musiqiqrupu"}>Music group</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/gelinlik"}>Wedding dress rental</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/avtomobil"}>Rent a wedding car</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/gozelliksalonu"}>Beauty salon</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/toytortlari"}>Wedding cakes</Link>
            </li>
            <li>
              {" "}
              <Link to={"/admin/cicekler"}>Wedding flowers</Link>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminFixed;
