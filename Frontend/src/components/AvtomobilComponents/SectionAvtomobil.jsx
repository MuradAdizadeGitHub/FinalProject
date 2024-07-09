import React, { useContext, useEffect, useState } from "react";
import "./Avtomobil.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../context/WishListProvider/WishListProvider";
function SectionAvtomobil() {
  const [avtomobil, setavtomobil] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllavtomobil();
  }, []);

  async function getAllavtomobil() {
    const res = await fetch("http://localhost:3000/avtomobil");
    const data = await res.json();
    setavtomobil(data);
  }

  function SortAz(params) {
    setavtomobil(avtomobil.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setavtomobil(avtomobil.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
}
  return (
    <section className="avtomobil">
      <div className="container">
        <div className="avtomobil-general">
          <div className="avtomobil-top">
            <p className="avtomobil-head">Avtomobil</p>
            <div>
              <button>Price A-Z</button>
              <button>Price Z-A</button>
            </div>
          </div>
          <div className="avtomobil-cards">
            {avtomobil.map((x) => {
              return (
                <>
                  <div className="avtomobil-card">
                    {" "}
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
                      <img className="avtomobil-img" src={x.image} alt="" />
                    </div>
                    <div className="avtomobil-card-items">
                      <p>Baku,Azerbaijan</p>
                      <p>Marka : {x.title}</p>
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
  );
}
export default SectionAvtomobil;
