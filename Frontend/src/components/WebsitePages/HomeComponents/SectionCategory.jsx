import React from "react";
import { Link } from "react-router-dom";

function SectionCategory() {
  return (
    <>
      <section className="section-category">
      <div className="container">
      <div className="section-category-general">
          <div className="section-category-head">
            <p className="saraylar-head">Categories</p>
            <Link className="all" to={"/"}>
              All
            </Link>
          </div>
          <div className="section-category-cards">
            <Link to={"/saraylar"} className="section-category-card1">
              {" "}
              <div>
                <p className="category-text-item">Şadlıq Sarayı</p>
              </div>
            </Link>
            <Link to={"/fotovideo"} className="section-category-card2">
              <div>
                <p className="category-text-item">Foto & Video</p>
              </div>
            </Link>
           <Link to={"/dj"} className="section-category-card3">
           <div >
              <p className="category-text-item">DJ</p>
            </div>
           </Link>
            <Link to={"/aparici"} className="section-category-card4">
            <div >
              <p className="category-text-item">Aparici</p>
            </div>
            </Link>
          <Link to={"/restoranlar"} className="section-category-card5">
          <div >
              <p className="category-text-item">Restoranlar</p>
            </div>
          </Link>
          <Link to={"/avtomobil"} className="section-category-card6">
          <div >
              <p className="category-text-item">Avtomobil</p>
            </div>
          </Link>
          </div>

          <div className="section-category-small-cards">
            <Link to={"/musiqiqrupu"} className="section-category-card7">
              <p  className="category-text-small-item">Musiqi & Qrupu</p>
            </Link>
            <Link to={"/fotovideo"} className="section-category-card8">
            <p  className="category-text-small-item">Foto & Video</p>
            </Link>
            <Link to={"/cicekler"} className="section-category-card9">
            <p  className="category-text-small-item">Çicəklər</p>
            </Link>
            <Link to={"/toytortlari"} className="section-category-card10">
            <p  className="category-text-small-item">Toy & Tortları</p>
            </Link>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default SectionCategory;
