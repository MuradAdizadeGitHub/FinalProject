import React, { useContext, useEffect, useState } from 'react'
import './Gelinlik.scss'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
function SectionGelinlik() {
  const [gelinlik, setgelinlik] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllgelinlik();
  }, []);

  async function getAllgelinlik() {
    const res = await fetch("http://localhost:3000/gelinlik");
    const data = await res.json();
    setgelinlik(data);
  }

  function SortAz(params) {
    setgelinlik(gelinlik.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setgelinlik(gelinlik.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
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
