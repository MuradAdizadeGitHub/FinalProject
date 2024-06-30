import React from "react";

function SectionBrideGroom() {
  return (
    <section className="bridegroom">
     
      <div className="bridegroom-general">
        <div>
          <img className="bridegroom-top-img"
            src="https://preview.colorlib.com/theme/hookup/images/top-bg.jpg.webp"
            alt=""
          />
        </div>
        <div className="container">
          <div className="bridegroom-head-area"><p className="bridegroom-head">BRIDE & GROOM</p></div>
          <div className="bridegroom-cards">
            <div className="bride-card">
              <img className="bridegroom-img" src="https://avatars.githubusercontent.com/u/125605525?v=4" alt="" />
              <p className="groom-bride-head">Rüfət Nəsibov</p>
              <p className="groom-bride-text">Saytınızdan istifade edərək tapdığımız bütün vasitələr ürəyimizcə oldu.</p>
            </div>
            <div className="groom-card">
              <img className="bridegroom-img" src="/public/WhatsApp Şəkil 2024-06-30 saat 13.29.42_df46d6b4.jpg" alt="" />
              <p className="groom-bride-head">Fidan Mirzeyeva</p>
              <p className="groom-bride-text">Xeyir işləriniz və tədbirləriniz üçün bu saytdan istifadə etməyinizi məsləhət görürəm.</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/hookup/images/bottom-bg.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionBrideGroom;
