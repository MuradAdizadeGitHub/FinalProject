import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishListProvider/WishListProvider';
import { Link } from 'react-router-dom';
import './Wishlist.scss'
function WishList() {
    const{wishlist,RemoveWishList } = useContext(WishListContext)
  return (
   <section className='wishlist'>
     <div className="avtomobil-cards">
    {wishlist.map((x) => {
      return (
        <>
          <div className="avtomobil-card">
            <div>
              <img className="avtomobil-img" src={x.image} alt="" />
            </div>
            <div className="avtomobil-card-items">
              <p>Baku,Azerbaijan</p>
              <p>Marka : {x.title}</p>
              <p>Price : {x.price}</p>
              <Link>Ətraflı</Link>
              <button onClick={() => RemoveWishList(x)}>
                Remove
              </button>
            </div>
          </div>
        </>
      );
    })}
  </div>
   </section>
  )
}

export default WishList
