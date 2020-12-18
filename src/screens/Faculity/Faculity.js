import React from "react";
import "./Faculity.css";
function Faculity(props) {
  return (
    <div className="container-fluid facu__fluid">
      <div className="container">
        <div
          className="facility__contianer"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="facility__box">
            <div className="facility-img__container">
              <i className="fa fa-globe i__fluid" aria-hidden="true"></i>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <i className="fa fa-credit-card-alt i__fluid" aria-hidden="true"></i>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <i className="fa fa-credit-card i__fluid" aria-hidden="true"></i>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <i className="fa fa-headphones i__fluid" aria-hidden="true"></i>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculity;
