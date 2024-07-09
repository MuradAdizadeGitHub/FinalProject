import React from "react";
import "./AdminDashboard.scss";
import { Link } from "react-router-dom";
import AdminFixed from "../../../components/Navbar/Admin/AdminFixed";
function AdminDashboard() {
  return (
    <section className="dashboard">
      <div className="dashboardgeneral">
        <AdminFixed></AdminFixed>
        <div className="dashboardmain">
          <table>
            <>
              <tr>
                
                <th><Link to={'/admin/saraylar'}>Wedding Place</Link></th>
                <th><Link to={'/admin/restoranlar'}>Restaurants</Link></th>
                <th><Link to={'/admin/users'}>Users</Link></th>
                <th><Link to={'/admin/fotovideo'}>Photo and Video</Link></th>
                <th><Link to={'/admin/dj'}>DJ</Link></th>
                <th><Link to={'/admin/aparici'}>Singer</Link></th>
              </tr>
              <tr>
                <td>
                 <Link to={'/admin/saraylar'}><img className="img" src="/public/wedding-location.png" alt="" /></Link>
                </td>
                <td>
                <Link to={'/admin/restoranlar'}><img className="img" src="http://localhost:5173/public/store.png" alt="" /></Link>
                </td>
                <td> <Link to={'/admin/users'}><img className="img" src="http://localhost:5173/public/user.png" alt="" /></Link></td>
                <td> <Link to={'/admin/fotovideo'}><img className="img" src="http://localhost:5173/public/camera.png" alt="" /></Link></td>
                <td>
                <Link to={'/admin/dj'}><img className="img" src="http://localhost:5173/public/dj.png" alt="" /></Link>
                </td>
                <td>
                <Link to={'/admin/aparici'}><img className="img" src="http://localhost:5173/public/karaoke.png" alt="" /></Link>
                </td>
              </tr>


              <tr>
              <th><Link to={'/admin/musiqiqrupu'}>Music group</Link></th>
              <th><Link to={'/admin/gelinlik'}>Wedding dress rental</Link></th>
              <th><Link to={'/admin/avtomobil'}>Rent a wedding car</Link></th>
              <th><Link to={'/admin/gozelliksalonu'}>Beauty salon</Link></th>
              <th><Link to={'/admin/toytortlari'}>Wedding cakes</Link></th>
              <th><Link to={'/admin/cicekler'}>Wedding flowers</Link></th>
              </tr>



              <tr>
                <td>
                <Link to={'/admin/musiqiqrupu'}><img className="img" src="http://localhost:5173/public/group.png" alt="" /></Link>
                </td>
                <td>
                <Link to={'/admin/gelinlik'}><img className="img" src="http://localhost:5173/public/clothes.png" alt="" /></Link>
                </td>
                <td>   <Link to={'/admin/avtomobil'}><img className="img" src="http://localhost:5173/public/car-rent.png" alt="" /></Link></td>
                <td>   <Link to={'/admin/gozelliksalonu'}><img className="img" src="http://localhost:5173/public/hairstyle.png" alt="" /></Link></td>
                <td>
                <Link to={'/admin/toytortlari'}><img className="img" src="http://localhost:5173/public/cake.png" alt="" /></Link>
                </td>
                <td>
                <Link to={'/admin/cicekler'}><img className="img" src="http://localhost:5173/public/cute.png" alt="" /></Link>
                </td>
              </tr>
            </>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
