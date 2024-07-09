import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

// import required modules
import { Navigation } from "swiper/modules";

import "./Topbar.scss";

function Topbar() {
  return (
    <>
    <section className="topbar">
    <Swiper
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="generalcarusel">
             <Link to={"/saraylar"}>
             <img
              className="imgcarusel"
              src="/public/wedding-location.png"
              alt=""
            />
            </Link>
            <Link to={"/saraylar"}>
              <li className="sar">Wedding place</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/restoranlar"}>
            <img className="imgcarusel" src="/public/store.png" alt="" />
            </Link>
            <Link to={"/restoranlar"}>
              <li className="sar">Restaurants</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/fotovideo"}>
            <img className="imgcarusel" src="/public/camera.png" alt="" />
            </Link>
            <Link to={"/fotovideo"}>
              <li className="sar">Photo and Video</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/dj"}>
            <img className="imgcarusel" src="/public/dj.png" alt="" />
            </Link>
            <Link to={"/dj"}>
              <li className="sar">DJ</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/aparici"}>
            <img className="imgcarusel" src="/public/karaoke.png" alt="" />
            </Link>
            <Link to={"/aparici"}>
              <li className="sar">Singer</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/musiqiqrupu"}>
            <img className="imgcarusel" src="/public/group.png" alt="" />
            </Link>
            <Link to={"/musiqiqrupu"}>
              <li className="sar">Music group</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/gelinlik"}>
            <img className="imgcarusel" src="/public/clothes.png" alt="" />
            </Link>
            <Link to={"/gelinlik"}>
              <li className="sar">Wedding dress rental</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            
            <Link to={"/avtomobil"}>
            <img className="imgcarusel" src="/public/car-rent.png" alt="" />
            </Link>
            <Link to={"/avtomobil"}>
              <li className="sar">Rent a wedding car</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/gozelliksalonu"}>
            <img className="imgcarusel" src="/public/hairstyle.png" alt="" />
            </Link>
            <Link to={"/gozelliksalonu"}>
              <li className="sar">Beauty salon</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/toytortlari"}>
            <img className="imgcarusel" src="/public/cake.png" alt="" />
            </Link>
            <Link to={"/toytortlari"}>
              <li className="sar">Wedding cakes</li>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="generalcarusel">
            <Link to={"/cicekler"}>
            <img className="imgcarusel" src="/public/cute.png" alt="" />
            </Link>
            <Link to={"/cicekler"}>
              <li className="sar">Wedding flowers</li>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}

export default Topbar;
