import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productList } from "../../actions/product.action";
import Rating from "../../common/Rating/Rating";
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
            <Link to={`/detail?id=${item._id}`}>
              <img
                src={`/api/uploads/${item.image}`}
                alt="headphone"
                className="product__img"
              />
            </Link>
            <Link
              to={`/detail?id=${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <p>{item.name}</p>
            </Link>
            {item.rating > 0 ? (
              <Rating value={item.rating} />
            ) : (
              <p style={{marginBottom:'0.4rem'}}>No have review</p>
            )}

            <p>{new Intl.NumberFormat().format(item.price)}</p>

            <Link
              to={`/detail?id=${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="btn btn__product">Add to cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
