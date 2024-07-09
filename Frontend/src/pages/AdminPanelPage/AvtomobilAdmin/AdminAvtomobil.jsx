import React, { useEffect, useState } from "react";
import "./AdminAvtomobil.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminAvtomobil() {
  const [avtomobil, setavtomobil] = useState([]);

  useEffect(() => {
    getAllavtomobil();
  }, []);

  async function getAllavtomobil() {
    const res = await fetch("http://localhost:3000/avtomobil");
    const data = await res.json();
    setavtomobil(data);
  }

  async function handleDeleteavtomobil(id) {
    const res = await fetch("http://localhost:3000/avtomobil/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllavtomobil();
  }

  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <div className="adminpaneltop">
            <p className="adminpaneltophead">Rent a wedding car</p>
            <div className="topitemsgeneral">
              <div>
                <p className="adminpaneltoptext">To Add Items</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
              <div>
                <Link to={"/addavtomobil"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}
            {avtomobil.map((x) => {
              return (
                <>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
                  <tr>
                    <td>
                      <img className="img" src={x.image} alt="" />
                    </td>
                 
                    <td>{x.title}</td>
                    <td>{x.price}</td>
                    <td>
                      <div className="crud">
                        <Link to={`/Uptadeavtomobil/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeleteavtomobil(x._id)}
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

export default AdminAvtomobil;
