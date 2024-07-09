import React, { useContext, useEffect, useState } from 'react'
import './DJ.scss'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
function SectionDJ() {
  const [dj, setdj] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAlldj();
  }, []);

  async function getAlldj() {
    const res = await fetch("http://localhost:3000/dj");
    const data = await res.json();
    setdj(data);
  }
  function SortAz(params) {
    setdj(dj.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setdj(dj.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
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
