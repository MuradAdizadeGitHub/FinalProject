import React, { useEffect, useState } from 'react'
import './FotoVideo.scss'
import { Link } from 'react-router-dom'
function SectionFotoVideo() {
  const [fotovideo, setfotovideo] = useState([]);

  useEffect(() => {
    getAllfotovideo();
  }, []);

  async function getAllfotovideo() {
    const res = await fetch("http://localhost:3000/fotovideo");
    const data = await res.json();
    setfotovideo(data);
  }
  return (
    <section className="fotovideo">
    <div className="container">
    <div className="fotovideo-general">
       <div className="fotovideo-top">
         <p className="fotovideo-head">Foto & Video</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="fotovideo-cards">
  {
    fotovideo.map((x)=>{
      return <>
             <div className="fotovideo-card">
           <div>
             <img className="fotovideo-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="fotovideo-card-items">
             <p><i class="fa-solid fa-location-dot"></i> Baku,Azeribaijan</p>
             <p>Fotoqrafçı : {x.title}</p>
             <p>{x.text}</p>
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
export default  SectionFotoVideo
