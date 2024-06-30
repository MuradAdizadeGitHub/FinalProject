import React, { useEffect, useState } from 'react'
import './DJ.scss'
import { Link } from 'react-router-dom'
function SectionDJ() {
  const [dj, setdj] = useState([]);

  useEffect(() => {
    getAlldj();
  }, []);

  async function getAlldj() {
    const res = await fetch("http://localhost:3000/dj");
    const data = await res.json();
    setdj(data);
  }
  return (
    <section className="dj">
    <div className="container">
    <div className="dj-general">
       <div className="dj-top">
         <p className="dj-head">DJ</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="dj-cards">
        {
          dj.map((x)=>{
            return <>
             <div className="dj-card">
           <div>
             <img className="dj-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="dj-card-items">
             <p>Baku,Azeribaijan</p>
             <p>{x.title}</p>
             <p>Price:{x.price}</p>
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
export default  SectionDJ
