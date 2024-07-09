import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import "./AdminPanel.scss";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/Navbar/Admin/AdminNavbar";
import AdminFixed from "../../components/Navbar/Admin/AdminFixed";
function AdminPanel() {
  const [products, setproducts] = useState([]);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    getAllproducts();
  }, []);

  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/users", {
      headers: { Authorization: token },
    });
    const data = await res.json();
    setproducts(data);
  }

  return (
    <>
      <AdminNavbar></AdminNavbar>
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
              {" "}
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Location</th>
                <th>Number</th>
                <th>Role</th>
                <th>Crud</th>
              </tr>{" "}
              {products.map((x) => {
                return (
                  <>
                    <tr>
                      <td>{x.firstname}</td>
                      <td>{x.lastname}</td>
                      <td>{x.email}</td>
                      <td>{x.location}</td>
                      <td>{x.number}</td>
                      <td>{x.role}</td>

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
    </>
  );
}

export default AdminPanel;

{
  /* <div className="">
<div>
  {products.map((x) => {
    return (
      <>
        <li>Email : {x.email}</li>
        <li>Password : {x.password}</li>
      </>
    );
  })}
</div>
</div> */
}
