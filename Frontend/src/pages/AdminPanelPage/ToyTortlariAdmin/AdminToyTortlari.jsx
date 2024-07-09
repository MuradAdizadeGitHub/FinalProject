import React, { useEffect, useState } from "react";
import "./AdminToyTortlari.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminToyTortlari() {
  const [toytortlari, settoytortlari] = useState([]);

  useEffect(() => {
    getAlltoytortlari();
  }, []);

  async function getAlltoytortlari() {
    const res = await fetch("http://localhost:3000/toytortlari");
    const data = await res.json();
    settoytortlari(data);
  }

  async function handleDeletetoytortlari(id) {
    const res = await fetch("http://localhost:3000/toytortlari/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAlltoytortlari();
  }

  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <div className="adminpaneltop">
            <p className="adminpaneltophead">Wedding Cakes</p>
            <div className="topitemsgeneral">
              <div>
                <p className="adminpaneltoptext">To Add Items</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
              <div>
                <Link to={"/addtoytortlari"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}         <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
            {toytortlari.map((x) => {
              return (
                <>
         
                  <tr>
                    <td>
                      <img className="img" src={x.image} alt="" />
                    </td>
                 
                    <td>{x.title}</td>
                    <td>{x.price}</td>
                    <td>
                      <div className="crud">
                        <Link to={`/Uptadetoytortlari/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeletetoytortlari(x._id)}
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

export default AdminToyTortlari;
