import React, { useEffect, useState } from 'react'
import './Gelinlik.scss'
import { Link } from 'react-router-dom'
function SectionGelinlik() {
  const [gelinlik, setgelinlik] = useState([]);

  useEffect(() => {
    getAllgelinlik();
  }, []);

  async function getAllgelinlik() {
    const res = await fetch("http://localhost:3000/gelinlik");
    const data = await res.json();
    setgelinlik(data);
  }
  return (
    <section className="gelinlik">
    <div className="container">
    <div className="gelinlik-general">
       <div className="gelinlik-top">
         <p className="gelinlik-head">Gəlinlik & İcarəsi</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="gelinlik-cards">
       {gelinlik.map((x) => {
              return (
                <>
                  <div className="gelinlik-card">
                    <div>
                      <img className="gelinlik-img" src={x.image} />
                    </div>
                    <div className="gelinlik-card-items">
                      <p>Baku,Azeribaijan</p>
                      <p>{x.title}</p>
                      <p>Price : {x.price}</p>
                      <Link>Ətraflı</Link>
                    </div>
                  </div>
                </>
              );
            })}
       </div>
     </div>
    </div>
   </section>
  )
}
export default  SectionGelinlik
