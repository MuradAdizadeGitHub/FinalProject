import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context/Auth/AuthProvider";
function Navbar() {
  const { token, logOut, decoded } = useContext(AuthContext);
  return (
    <>

<div className="navv" role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    

    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <div className="topbar-items2">
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

              {decoded && decoded.role === "admin" ? (
                <>
                  <Link className="adminlink" to={"/admin/users"}>Admin</Link>
                </>
              ) : null}

              {token ? (
                <>
                  <Link to={"/profil"}>
                    {" "}
                    <img
                      className="usericon"
                      src="/public/user.png"
                      alt=""
                      title="My Profile"
                    />
                  </Link>
                  <button className="logoutbtn" onClick={logOut}>Log Out</button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <img
                      className="loginicon"
                      src="/public/log-in1.png"
                      alt=""
                    />
                  </Link>
                </>
              )}
            </div>
    </ul>
    
  </div>
  <div>
    <img className="navbar-img" src="/public/Yoyo Wedding Planneradmin.png" alt="" />
  </div>
</div>







      <nav className="navbar">
        <div className="container">
          <div className="navbar-general">
            <div>
              <Link to={"/"}>
                <img
                  className="navbar-img"
                  src="/public/Yoyo Wedding Planner.png"
                  alt=""
                />
              </Link>
            </div>

            <ul className="navbar-items">
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
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

              {decoded && decoded.role === "admin" ? (
                <>
                  <Link className="adminlink" to={"/admin/users"}>Admin</Link>
                </>
              ) : null}

              {token ? (
                <>
                  <Link to={"/profil"}>
                    {" "}
                    <img
                      className="usericon"
                      src="/public/user.png"
                      alt=""
                      title="My Profile"
                    />
                  </Link>
                  <button className="logoutbtn" onClick={logOut}>Log Out</button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <img
                      className="loginicon"
                      src="/public/log-in1.png"
                      alt=""
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
