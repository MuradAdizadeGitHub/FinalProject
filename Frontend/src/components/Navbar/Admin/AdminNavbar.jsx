import React from "react";
import "./AdminNavbar.scss";
import { Link } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <nav className="adminnav">
   <div className="container">
   <div className="adminnavbargeneral">
   <div className="admintop">
            <div className="adminapanelhead">
              {" "}
              <h1>Admin Panel</h1>
            </div>

            <img
              className="adminlogoimg"
              src="/public/Yoyo Wedding Planneradmin.png"
              alt=""
            />
          </div>

          <div className="topbar-items">
              <i
                className="topbar-icon"
                class="fa-solid fa-magnifying-glass"
              ></i>
              <Link to={'/wishlist'}>
                <i className="topbar-icon" class="fa-regular fa-heart"></i>
              </Link>
              <select className="topbar-select">
                <option value="az">AZ</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
              </select>
            </div>

   </div>

   </div>

      </nav>
    </>
  );
}

export default AdminNavbar;
