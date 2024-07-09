import React, { useContext, useEffect, useState } from 'react'
import './Restoranlar.scss'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
function SectionRestoranlar() {
  const [restoranlar, setrestoranlar] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllrestoranlar();
  }, []);

  async function getAllrestoranlar() {
    const res = await fetch("http://localhost:3000/restoranlar");
    const data = await res.json();
    setrestoranlar(data);
  }
  function SortAz(params) {
    setrestoranlar(restoranlar.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setrestoranlar(restoranlar.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
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
             <span onClick={() => IncreaseWishlist(x)} className="btn">
                      {IsExist(x) ? (
                        <i
                          style={{ fontSize: "30px" }}
                          className="fa-solid fa-heart"
                        ></i>
                      ) : (
                        <i
                          style={{ fontSize: "30px" }}
                          className="fa-regular fa-heart"
                        ></i>
                      )}
                    </span>
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
