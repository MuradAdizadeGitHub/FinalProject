import React, { useContext, useEffect, useState } from 'react'
import './FotoVideo.scss'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
function SectionFotoVideo() {
  const [fotovideo, setfotovideo] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllfotovideo();
  }, []);

  async function getAllfotovideo() {
    const res = await fetch("http://localhost:3000/fotovideo");
    const data = await res.json();
    setfotovideo(data);
  }
  function SortAz(params) {
    setfotovideo(fotovideo.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setfotovideo(fotovideo.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
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
