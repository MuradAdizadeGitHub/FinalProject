import React, { useEffect, useState } from "react";
import "./AdminCicekler.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminCicekler() {
  const [cicekler, setcicekler] = useState([]);

  useEffect(() => {
    getAllcicekler();
  }, []);

  async function getAllcicekler() {
    const res = await fetch("http://localhost:3000/cicekler");
    const data = await res.json();
    setcicekler(data);
  }

  async function handleDeletecicekler(id) {
    const res = await fetch("http://localhost:3000/cicekler/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllcicekler();
  }

  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <div className="adminpaneltop">
            <p className="adminpaneltophead">Wedding Flowers</p>
            <div className="topitemsgeneral">
              <div>
                <p className="adminpaneltoptext">To Add Items</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
              <div>
                <Link to={"/addcicekler"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}          <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
            {cicekler.map((x) => {
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
                        <Link to={`/Uptadecicekler/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeletecicekler(x._id)}
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

export default AdminCicekler;
