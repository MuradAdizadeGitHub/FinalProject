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
                <p className="category-text-item">Wedding Place</p>
              </div>
            </Link>
            <Link to={"/fotovideo"} className="section-category-card2">
              <div>
                <p className="category-text-item">Photo and Video</p>
              </div>
            </Link>
           <Link to={"/dj"} className="section-category-card3">
           <div >
              <p className="category-text-item">DJ</p>
            </div>
           </Link>
            <Link to={"/aparici"} className="section-category-card4">
            <div >
              <p className="category-text-item">Singer</p>
            </div>
            </Link>
          <Link to={"/restoranlar"} className="section-category-card5">
          <div >
              <p className="category-text-item">Restaurants</p>
            </div>
          </Link>
          <Link to={"/avtomobil"} className="section-category-card6">
          <div >
              <p className="category-text-item">Rent a wedding car</p>
            </div>
          </Link>
          </div>

          <div className="section-category-small-cards">
            <Link to={"/musiqiqrupu"} className="section-category-card7">
              <p  className="category-text-small-item">Music group</p>
            </Link>
            <Link to={"/gozelliksalonu"} className="section-category-card8">
            <p  className="category-text-small-item">Beauty salon</p>
            </Link>
            <Link to={"/cicekler"} className="section-category-card9">
            <p  className="category-text-small-item">Wedding flowers</p>
            </Link>
            <Link to={"/toytortlari"} className="section-category-card10">
            <p  className="category-text-small-item">Wedding cakes</p>
            </Link>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default SectionCategory;
