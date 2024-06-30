import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
  <>
  <nav className='navbar'>  
<div className='container'>
<div className='navbar-general'>
<div>
  <Link to={'/'}><img className='navbar-img' src="/public/Yoyo Wedding Planner.png" alt="" /></Link>
</div>


      <ul className='navbar-items'>
  <Link to={'/'}><li>Home</li></Link>
  <Link to={'/'}><li>Reservation</li></Link>
  <Link to={'/'}><li>Our Services</li></Link>
  <Link to={'/contact'}><li>Contact</li></Link>

      </ul>
      <div className='topbar-items'>
        <i className='topbar-icon' class="fa-solid fa-magnifying-glass"></i>
        <Link><i className='topbar-icon' class="fa-regular fa-heart"></i></Link>
        <select className='topbar-select'>
                <option value="az">AZ</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
        </select>
        <Link><button className='topbar-button'>Log in</button></Link>
        </div>
    </div>
</div>
  </nav>
  </>
  )
}

export default Navbar





// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Topbar.scss'
// function Topbar() {
//   return (
//  <>
//  <section className='topbar'>
//     <div className='topbar-general'>
//         <div>
//             <img className='topbar-img' src="https://toyda.az/assets/logo.svg" alt="" />
//         </div>
//         <div className='topbar-items'>
//         <i className='topbar-icon' class="fa-solid fa-magnifying-glass"></i>
//         <Link><i className='topbar-icon' class="fa-regular fa-heart"></i></Link>
//         <select className='topbar-select'>
//                 <option value="az">AZ</option>
//                 <option value="ru">RU</option>
//                 <option value="en">ENG</option>
//         </select>
//         <Link><button className='topbar-button'>Log in</button></Link>
//         </div>
//     </div>
//  </section>
//  </>
//   )
// }

// export default Topbar



{/* <nav className='navbar'>  
<div className='navbar-general'>
  <ul className='navbar-items'>
<Link to={'/saraylar'}><li>Şadlıq sarayları</li></Link>
<Link to={'/restoranlar'}><li>Restoranlar</li></Link>
<Link to={'/fotovideo'}><li>Foto və Video</li></Link>
<Link to={'/dj'}><li>DJ</li></Link>
<Link to={'/aparici'}><li>Aparıcı</li></Link>
<Link to={'/musiqiqrupu'}><li>Musiqi qrupu</li></Link>
<Link to={'/gelinlik'}><li>Gəlinlik icarəsi</li></Link>
<Link to={'/avtomobil'}><li>Avtomobil icarəsi</li></Link>
<Link to={'/gozelliksalonu'}><li>Gözəllik salonu</li></Link>
<Link to={'/toytortlari'}><li>Toy tortları</li></Link>
<Link to={'/cicekler'}><li>Çiçəklər</li></Link>
  </ul>
</div>
</nav> */}