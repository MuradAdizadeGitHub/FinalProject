import React from "react";
import "./Saraylar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function SectionSaraylar() {
  const [saraylar, setsaraylar] = useState([]);

  useEffect(() => {
    getAllsaraylar();
  }, []);

  async function getAllsaraylar() {
    const res = await fetch("http://localhost:3000/saraylar");
    const data = await res.json();
    setsaraylar(data);
  }
  return (
    <section className="saraylar">
      <div className="container">
        <div className="saraylar-general">
          <div className="saraylar-top">
            <p className="saraylar-head">Şadlıq Sarayı</p>
            <div>
              <button>Price A-Z</button>
              <button>Price Z-A</button>
            </div>
          </div>
          <div className="saraylar-cards">
            {saraylar.map((x) => {
              return (
                <>
                  <div className="saraylar-card">
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
