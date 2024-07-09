import React, { useEffect, useState } from "react";
import "./AdminSaraylar.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminSaraylar() {
  const [saraylar, setsaraylar] = useState([]);

  useEffect(() => {
    getAllsaraylar();
  }, []);

  async function getAllsaraylar() {
    const res = await fetch("http://localhost:3000/saraylar");
    const data = await res.json();
    setsaraylar(data);
  }

  async function handleDeletesaraylar(id) {
    const res = await fetch("http://localhost:3000/saraylar/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllsaraylar();
  }

  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <div className="adminpaneltop">
            <p className="adminpaneltophead">Wedding Place</p>
            <div className="topitemsgeneral">
              <div>
                <p className="adminpaneltoptext">To Add Items</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
              <div>
                <Link to={"/addsaraylar"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}              <tr>
                    <th>Image</th>
                    <th>Location</th>
                    <th>Title</th>
                    <th>Kapasite</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
            {saraylar.map((x) => {
              return (
                <>
    
                  <tr>
                    <td>
                      <img className="img" src={x.image} alt="" />
                    </td>
                    <td>
                      <p>{x.location}</p>
                    </td>
                    <td>{x.title}</td>
                    <td>{x.tutum}</td>
                    <td>{x.price}</td>
                    <td>
                      <div className="crud">
                        <Link to={`/UptadeSaraylar/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeletesaraylar(x._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminSaraylar;
