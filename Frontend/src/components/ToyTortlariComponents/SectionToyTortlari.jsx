import React, { useEffect, useState } from "react";
import "./ToyTortlari.scss";
import { Link } from "react-router-dom";
function SectionToyTortlari() {
  const [toytortlari, settoytortlari] = useState([]);

  useEffect(() => {
    getAlltoytortlari();
  }, []);

  async function getAlltoytortlari() {
    const res = await fetch("http://localhost:3000/toytortlari");
    const data = await res.json();
    settoytortlari(data);
  }
  return (
    <section className="toytortlari">
      <div className="container">
        <div className="toytortlari-general">
          <div className="toytortlari-top">
            <p className="toytortlari-head">Toy & Tortları</p>
            <div>
              <button>Price A-Z</button>
              <button>Price Z-A</button>
            </div>
          </div>
          <div className="toytortlari-cards">
          {toytortlari.map((x) => {
              return (
                <>
                  <div className="toytortlari-card">
                    <div>
                      <img className="toytortlari-img" src={x.image} />
                    </div>
                    <div className="toytortlari-card-items">
                      <p>Şamil Əzizbəyov küçəsi,128</p>
                      <p>{x.title}</p>
                      <p>Price : {x.price} (1kq üçün)</p>
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
export default SectionToyTortlari;
