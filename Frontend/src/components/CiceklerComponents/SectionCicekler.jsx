import React, { useEffect, useState } from "react";
import "./Cicekler.scss";
import { Link } from "react-router-dom";
function SectionCicekler() {
  const [cicekler, setcicekler] = useState([]);

  useEffect(() => {
    getAllcicekler();
  }, []);

  async function getAllcicekler() {
    const res = await fetch("http://localhost:3000/cicekler");
    const data = await res.json();
    setcicekler(data);
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
