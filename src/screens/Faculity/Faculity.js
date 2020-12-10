import React from "react";
import "./Faculity.css";
import "../Header.css";
function Faculity(props) {
  return (
    <div className="container-fluid facu__fluid">
      <div className="container">
        <div
          class="facility__contianer"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="facility__box">
            <div class="facility-img__container">
              <i class="fa fa-globe i__fluid" aria-hidden="true"></i>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <i class="fa fa-credit-card-alt i__fluid" aria-hidden="true"></i>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <i class="fa fa-credit-card i__fluid" aria-hidden="true"></i>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <i class="fa fa-headphones i__fluid" aria-hidden="true"></i>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculity;
