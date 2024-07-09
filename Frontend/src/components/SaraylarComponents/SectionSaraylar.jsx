import React, { useContext } from "react";
import "./Saraylar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { WishListContext } from "../../context/WishListProvider/WishListProvider";
function SectionSaraylar() {
  const [saraylar, setsaraylar] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllsaraylar();
  }, []);

  async function getAllsaraylar() {
    const res = await fetch("http://localhost:3000/saraylar");
    const data = await res.json();
    setsaraylar(data);
  }

  function SortAz(params) {
    setsaraylar(saraylar.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setsaraylar(saraylar.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
}
  return (
    <section className="saraylar">
      <div className="container">
        <div className="saraylar-general">
          <div className="saraylar-top">
            <p className="saraylar-head">Şadlıq Sarayı</p>
            <div>
              <button onClick={() => SortAz("price")}>Price A-Z</button>
              <button onClick={() => SortZa("price")}>Price Z-A</button>
            </div>
          </div>
          <div className="saraylar-cards">
            {saraylar.map((x) => {
              return (
                <>
                  <div className="saraylar-card">
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
                      <img className="saraylar-img" src={x.image} alt="" />
                    </div>
                    <div className="saraylar-card-items">
                      <p><i class="fa-solid fa-location-dot"></i> {x.location}</p>
                      <p>{x.title}</p>
                      <p>Kapasite: {x.tutum}</p>
                      <p>Price: {x.price}</p>
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
  );
}

export default SectionSaraylar;
