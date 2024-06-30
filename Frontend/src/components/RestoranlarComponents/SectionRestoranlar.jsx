import React, { useEffect, useState } from 'react'
import './Restoranlar.scss'
import { Link } from 'react-router-dom'
function SectionRestoranlar() {
  const [restoranlar, setrestoranlar] = useState([]);

  useEffect(() => {
    getAllrestoranlar();
  }, []);

  async function getAllrestoranlar() {
    const res = await fetch("http://localhost:3000/restoranlar");
    const data = await res.json();
    setrestoranlar(data);
  }
  return (
    <section className="restoranlar">
    <div className="container">
    <div className="restoranlar-general">
       <div className="restoranlar-top">
         <p className="restoranlar-head">Restoranlar</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="restoranlar-cards">
  {
    restoranlar.map((x)=>{
      return <>
             <div className="restoranlar-card">
           <div>
             <img className="restoranlar-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="restoranlar-card-items">
             <p><i class="fa-solid fa-location-dot"></i> {x.location}</p>
             <p>{x.title}</p>
             <p>Tutum : {x.tutum}</p>
             <Link>Ətraflı</Link>
           </div>
         </div>
      </>
    })
  }
       </div>
     </div>
    </div>
   </section>
  )
}
export default SectionRestoranlar
