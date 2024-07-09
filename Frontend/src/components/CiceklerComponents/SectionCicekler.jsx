import React, { useContext, useEffect, useState } from "react";
import "./Cicekler.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../context/WishListProvider/WishListProvider";
function SectionCicekler() {
  const [cicekler, setcicekler] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);

  useEffect(() => {
    getAllcicekler();
  }, []);

  async function getAllcicekler() {
    const res = await fetch("http://localhost:3000/cicekler");
    const data = await res.json();
    setcicekler(data);
  }

  function SortAz(params) {
    setcicekler(cicekler.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setcicekler(cicekler.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
}

  return (
    <section className="cicekler">
      <div className="container">
        <div className="cicekler-general">
          <div className="cicekler-top">
            <p className="cicekler-head">Çicəklər</p>
            <div>
              <button>Price A-Z</button>
              <button>Price Z-A</button>
            </div>
          </div>
          <div className="cicekler-cards">
            {cicekler.map((x) => {
              return (
                <>
                  <div className="cicekler-card">
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
                      <img className="cicekler-img" src={x.image} alt="" />
                    </div>
                    <div className="cicekler-card-items">
                      <p>Baku,Amburan Mall</p>
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
  );
}
export default SectionCicekler;
