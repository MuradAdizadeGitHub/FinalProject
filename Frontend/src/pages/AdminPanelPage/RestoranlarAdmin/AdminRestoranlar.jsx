import React, { useEffect, useState } from "react";
import "./AdminRestoranlar.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminRestoranlar() {
  const [restoranlar, setrestoranlar] = useState([]);

  useEffect(() => {
    getAllrestoranlar();
  }, []);

  async function getAllrestoranlar() {
    const res = await fetch("http://localhost:3000/restoranlar");
    const data = await res.json();
    setrestoranlar(data);
  }

  async function handleDeleterestoranlar(id) {
    const res = await fetch("http://localhost:3000/restoranlar/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllrestoranlar();
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
                <Link to={"/addrestoranlar"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}
            {restoranlar.map((x) => {
              return (
                <>
                  <tr>
                    <th>Image</th>
                    <th>Location</th>
                    <th>Title</th>
                    <th>Kapasite</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
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
                        <Link to={`/Uptaderestoranlar/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeleterestoranlar(x._id)}
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

export default AdminRestoranlar;
