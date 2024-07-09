import React from "react";
import "./Contact.scss";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-general">
            <div className="contact-head">
              <p className="contactus-head">Contact Us</p>
              <p className="contactus-text">
                For comprehensive communication with us, you can use the
                following contact methods.
              </p>
            </div>
            <div className="contact-items">
              <div className="contact-icon-general">
                <div className="contact-icon-area">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="contact-icon-head">Call for questions.</p>
                  <p className="contact-icon-text">050-610-63-13</p>
                </div>
              </div>

              <div className="contact-icon-general">
                <div className="contact-icon-area">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <p className="contact-icon-head">For contact via Gmail.</p>
                  <p className="contact-icon-text">tural434elizade@gmail.com</p>
                </div>
              </div>

              <div className="contact-icon-general">
                <div className="contact-icon-area">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="contact-icon-head">
                    Location address of our service.
                  </p>
                  <p className="contact-icon-text">Baku,Azeribaijan</p>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <div className="formgeneral"> 
                <div className="labelgeneral">
                 <div className="labelitems">
                 <label htmlFor="">Firstname</label>
                 <input className="input" type="text" />
                 </div>
                 <div className="labelitems">
                 <label htmlFor="" >Lastname</label>
                 <input type="text" className="input" />
                 </div>
                </div>

                            <div className="labelgeneral">
                 <div className="labelitems">
                 <label htmlFor="" >Email</label>
                 <input type="text" className="input" />
                 </div>
                 <div className="labelitems">
                 <label htmlFor="" >Number</label>
                 <input type="text" className="input" />
                 </div>
                </div>
                <div>
                  <textarea
                    class="textarea"
                    name="subject"
                    id="subject"
                    cols="40"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button className="formsend">Send</button>
                </div>
</div>


                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.636871464545!2d49.74542797444147!3d40.461173452935626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085ea97630a41%3A0x14fba0e920e2c02c!2sOlimp%20MTK%20Ev!5e0!3m2!1str!2saz!4v1720399937358!5m2!1str!2saz" frameborder="0"></iframe>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
