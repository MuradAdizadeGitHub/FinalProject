
import React from 'react'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
<>
<nav className='navbar'>  
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
 </nav>
</>
  )
}

export default Topbar










// import React from 'react'
// import './Topbar.scss'
// function Topbar() {

//   return (
//  <>
//  <section className='topbar'>
//  <div class="dropdown">
//         <div class="select">
//             <span class="selected">Youtube</span>
//             <div class="caret"></div>
//         </div>
//         <ul class="menu">
//             <li>Instagram</li>
//             <li>Twitter</li>
//             <li class="active">Youtube</li>
//         </ul>
//     </div>
//  </section>
//  </>
//   )
// }

// export default Topbar
