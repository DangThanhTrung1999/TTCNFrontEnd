import React from "react";
import img1 from "../../images/products/headphone/headphone4.jpeg";
import "./Product.css";

function Product(props) {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <div className="row">
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
        <div className="col-3 product__center">
          <img src={img1} alt="headphone" className="product__img" />
          <p>Sony WH-CH150</p>
          <button className="btn btn__product">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
