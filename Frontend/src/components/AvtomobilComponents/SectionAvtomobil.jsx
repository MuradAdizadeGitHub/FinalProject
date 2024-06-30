import React, { useEffect, useState } from 'react'
import './Avtomobil.scss'
import { Link } from 'react-router-dom'
function SectionAvtomobil() {
  const [avtomobil, setavtomobil] = useState([]);

  useEffect(() => {
    getAllavtomobil();
  }, []);

  async function getAllavtomobil() {
    const res = await fetch("http://localhost:3000/avtomobil");
    const data = await res.json();
    setavtomobil(data);
  }
  return (
    <section className="avtomobil">
    <div className="container">
    <div className="avtomobil-general">
       <div className="avtomobil-top">
         <p className="avtomobil-head">Avtomobil</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="avtomobil-cards">
{
  avtomobil.map((x)=>{
    return <>
             <div className="avtomobil-card">
           <div>
             <img className="avtomobil-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="avtomobil-card-items">
             <p>Baku,Azerbaijan</p>
             <p>Marka : {x.title}</p>
             <p>Price : {x.price}</p>
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
export default  SectionAvtomobil
