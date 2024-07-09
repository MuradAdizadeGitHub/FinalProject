import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
<>

<footer class="footer-distributed">

			<div class="footer-left">

				<div><img className='topbar-img' src="/public/Yoyo Wedding Planner.png" alt="" /></div>

				<p class="footer-links">
					<Link to={'/'}>Home</Link>
					<Link to={'/saraylar'}>Şadlıq sarayları</Link>
					<Link to={'/restoranlar'}>Restoranlar</Link>
					<Link to={'/fotovideo'}>Foto və Video</Link>
					<Link to={'/dj'}>DJ</Link>
					<Link to={'/aparici'}>Aparıcı</Link>
					<Link to={'/musiqiqrupu'}>Musiqi qrupu</Link>
					<Link to={'/gelinlik'}>Gəlinlik icarəsi</Link>
					<Link to={'/avtomobil'}>Avtomobil icarəsi</Link>
					<Link to={'/gozelliksalonu'}>Gözəllik salonu</Link>
					<Link to={'/toytortlari'}>Toy tortları</Link>
					<Link to={'/cicekler'}>Çiçəklər</Link>
				</p>

				<p class="footer-company-name">Wedding Planner © 2024</p>
			</div>

			<div class="footer-center">

				<div>
				<i class="fa-solid fa-location-dot"></i>
					<p><span></span> Baku,Azeribaijan</p>
				</div>

				<div>
				<i class="fa-solid fa-phone"></i>
					<p>+994 50 610 63 13</p>
				</div>

				<div>
				<i class="fa-solid fa-envelope"></i>
					<p><Link style={{color:'white'}}>tural434elizade@gmail.com</Link></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					If you want to make your happy days and good deeds more fun and memorable with us, you can contact us.
				</p>

				<div class="footer-icons">

					<Link to={'https://www.instagram.com/'}><i class="fa-brands fa-instagram"></i></Link>
					<Link to={'https://www.linkedin.com/'}><i class="fa-brands fa-linkedin"></i></Link>
					<Link to={'https://www.facebook.com/'}><i class="fa-brands fa-square-facebook"></i></Link>
					<Link to={'https://x.com/'}><i class="fa-brands fa-square-twitter"></i></Link>

				</div>

			</div>

		</footer>
</>
  )
}

export default Footer

