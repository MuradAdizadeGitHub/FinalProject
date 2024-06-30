import React, { useEffect, useState } from "react";
import "./MusiqiQrupu.scss";
import { Link } from "react-router-dom";
function SectionMusiqiQrupu() {
  const [musiqiqrupu, setmusiqiqrupu] = useState([]);

  useEffect(() => {
    getAllmusiqiqrupu();
  }, []);

  async function getAllmusiqiqrupu() {
    const res = await fetch("http://localhost:3000/musiqiqrupu");
    const data = await res.json();
    setmusiqiqrupu(data);
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
