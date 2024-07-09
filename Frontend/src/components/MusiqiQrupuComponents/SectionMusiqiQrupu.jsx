import React, { useContext, useEffect, useState } from "react";
import "./MusiqiQrupu.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../context/WishListProvider/WishListProvider";
function SectionMusiqiQrupu() {
  const [musiqiqrupu, setmusiqiqrupu] = useState([]);
  const { IncreaseWishlist, IsExist } = useContext(WishListContext);
  useEffect(() => {
    getAllmusiqiqrupu();
  }, []);

  async function getAllmusiqiqrupu() {
    const res = await fetch("http://localhost:3000/musiqiqrupu");
    const data = await res.json();
    setmusiqiqrupu(data);
  }
  function SortAz(params) {
    setmusiqiqrupu(musiqiqrupu.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
}
function SortZa(params) {
    setmusiqiqrupu(musiqiqrupu.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
}
  return (
    <section className="musiqiqrupu">
      <div className="container">
        <div className="musiqiqrupu-general">
          <div className="musiqiqrupu-top">
            <p className="musiqiqrupu-head">Musiqi & Qrupu</p>
            <div>
              <button>Price A-Z</button>
              <button>Price Z-A</button>
            </div>
          </div>
          <div className="musiqiqrupu-cards">
            {musiqiqrupu.map((x) => {
              return (
                <>
                  <div className="musiqiqrupu-card">
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
                      <img className="musiqiqrupu-img" src={x.image} />
                    </div>
                    <div className="musiqiqrupu-card-items">
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
  );
}
export default SectionMusiqiQrupu;
