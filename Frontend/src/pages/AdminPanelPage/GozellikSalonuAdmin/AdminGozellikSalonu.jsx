import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminGozellikSalonu() {
  const [fotovideo, setfotovideo] = useState([]);

  useEffect(() => {
    getAllfotovideo();
  }, []);

  async function getAllfotovideo() {
    const res = await fetch("http://localhost:3000/gozelliksalonu");
    const data = await res.json();
    setfotovideo(data);
  }

  async function handleDeletefotovideo(id) {
    const res = await fetch("http://localhost:3000/gozelliksalonu/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllfotovideo();
  }

  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <div className="adminpaneltop">
            <p className="adminpaneltophead">Beauty salon</p>
            <div className="topitemsgeneral">
              <div>
                <p className="adminpaneltoptext">To Add Items</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
              <div>
                <Link to={"/addfotovideo"}>
                  {" "}
                  <button className="adminpaneltopbtn">Add Items</button>
                </Link>
              </div>
            </div>
          </div>
          <table>
            {" "}       <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Crud</th>
                  </tr>
            {fotovideo.map((x) => {
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
                        <Link to={`/Uptadefotovideo/${x._id}`}>
                          {" "}
                          <button className="crudbtn">Uptade</button>
                        </Link>
                        <button
                          className="crudbtn"
                          onClick={() => handleDeletefotovideo(x._id)}
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

export default AdminGozellikSalonu;
