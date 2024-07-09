import React, { useContext, useEffect, useState } from 'react'
import './GozellikSalonu.scss'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
function SectionGozellikSalonu() {
  const [gozelliksalonu, setgozelliksalonu] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllgozelliksalonu();
  }, []);

  async function getAllgozelliksalonu() {
    const res = await fetch("http://localhost:3000/gozelliksalonu");
    const data = await res.json();
    setgozelliksalonu(data);
  }
  function SortAz(params) {
    setgozelliksalonu(gozelliksalonu.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setgozelliksalonu(gozelliksalonu.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
}
  return (
    <section className="gozelliksalonu">
    <div className="container">
    <div className="gozelliksalonu-general">
       <div className="gozelliksalonu-top">
         <p className="gozelliksalonu-head">Gözəllik & Salonu</p>
         <div>
         <button>Price A-Z</button>
         <button>Price Z-A</button>
         </div>
       </div>
       <div className="gozelliksalonu-cards">
        {
          gozelliksalonu.map((x)=>{
            return <>
             <div className="gozelliksalonu-card">
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
             <img className="gozelliksalonu-img"
               src={x.image}
               alt=""
             />
           </div>
           <div className="gozelliksalonu-card-items">
             <p>Baku,Azeribaijan</p>
             <p>{x.title}</p>
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
export default  SectionGozellikSalonu
