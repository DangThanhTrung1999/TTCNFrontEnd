import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productList } from "../../actions/product.action";
import "./Product.css";

function Product(props) {
  const listProduct = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <div className="row">
        {listProduct.products.map((item) => (
          <div className="col-12 col-sm-3 product__center" key={item._id}>
            <Link to={"/detail"}>
              <img
                src={`/api/uploads/${item.image}`}
                alt="headphone"
                className="product__img"
              />
            </Link>
            <Link to={"/detail"} style={{ textDecoration: "none" }}>
              <p>{item.name}</p>
            </Link>
            <p>{item.price}</p>
            <button className="btn btn__product">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
