import React, { useEffect, useState } from 'react'
import './Aparici.scss'
import { Link } from 'react-router-dom'
function SectionAparici() {
  const [aparici, setaparici] = useState([]);

  useEffect(() => {
    getAllaparici();
  }, []);

  async function getAllaparici() {
    const res = await fetch("http://localhost:3000/aparici");
    const data = await res.json();
    setaparici(data);
  }
  return (
    <section className="aparici">
    <div className="container">
    <div className="aparici-general">
       <div className="aparici-top">
         <p className="aparici-head">Aparici</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="aparici-cards">
{
  aparici.map((x)=>{
    return <>
    <div className="aparici-card">
           <div>
             <img className="aparici-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="aparici-card-items">
             <p>Baku,Azeribaijan</p>
             <p>{x.title}</p>
             <p>Tutum kapasitesi:500-1000</p>
             <p>Price: {x.price}</p>
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
export default  SectionAparici
