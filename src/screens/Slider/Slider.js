import React from "react";
import { Glide } from "react-glide";
import "../Header.css";
import "react-glide/lib/reactGlide.css";

import img1 from "../../images/banner_01.png";
import img2 from "../../images/banner_02.png";
function Slider(props) {
  return (
    <div style={{ height: "700px", overflow: "hidden" }}>
      <Glide
        height={700}
        // width={1000}
        autoPlay={true}
        autoPlaySpeed={5000}
        dots={true}
        infinite={true}
      >
        <div class="glide__slide" style={{ backgroundColor: "#22222" }}>
          <div class="hero__center">
            <div class="hero__left">
              <span class="">New Inspiration 2020</span>
              <h1 class="">PHONES MADE FOR YOU!</h1>
              <p>Trending from mobile and headphone style collection</p>
              <a href="#">
                <button
                  class="hero__btn"
                  style={{
                    position: "relative",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  SHOP NOW
                </button>
              </a>
            </div>
            <div class="hero__right">
              <div class="hero__img-container">
                <img class="banner_01" src={img1} alt="banner2" />
              </div>
            </div>
          </div>
        </div>
        <div class="glide__slide">
          <div class="hero__center">
            <div class="hero__left">
              <span>New Inspiration 2020</span>
              <h1>PHONES MADE FOR YOU!</h1>
              <p>Trending from mobile and headphone style collection</p>
              <a href="#">
                <button
                  class="hero__btn"
                  style={{
                    position: "relative",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  SHOP NOW
                </button>
              </a>
            </div>
            <div class="hero__right">
              <img class="banner_02" src={img2} alt="banner2" />
            </div>
          </div>
        </div>
      </Glide>
    </div>
  );
}

export default Slider;
