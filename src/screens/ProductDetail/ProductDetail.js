import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetail.css";
import { detailsProduct } from "../../actions/product.action";
import Rating from "../../common/Rating/Rating";

function ProductDetail(props) {
  const productDetail = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const { product, loading, error } = productDetail;
  let id = props.location.search.split("=")[1];
  let reviews = product ? product.reviews : [];
  console.log("id", id);
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 detail-left">
          <img
            className="detail-img"
            src={`api/uploads/${product ? product.image : ""}`}
          />
        </div>
        {/* style={{ backgroundColor: "yellow" }} */}
        <div className="col-12 col-sm-6 detail">
          <table className="table table-borderless">
            <tr
              style={{
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingBottom: "20px",
                }}
              >
                {product ? product.name : ""}
              </h3>
              <div>
                <a href="#reviews">
                  <Rating
                    value={product ? product.rating : ""}
                    text={`${product ? product.numReviews : ""} reviews`}
                  />
                </a>
              </div>
            </tr>
            <tr>
              <td className="detail-title">Price</td>
              <td>{product ? product.price : ""}</td>
            </tr>
            <tr>
              <td className="detail-title">Brand</td>
              <td>{product ? product.brand : ""}</td>
            </tr>
            <tr>
              <td className="detail-title">Category</td>
              <td>{product ? product.category : ""}</td>
            </tr>
            <tr>
              <td className="detail-title">Description</td>
              <td>{product ? product.description : ""}</td>
            </tr>
          </table>
        </div>
      </div>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          paddingBottom: "20px",
        }}
      >
        Reviews
      </h3>
      {!reviews.length && (
        <div>
          <p
            style={{
              fontSize: "16px",
              paddingBottom: "10px",
            }}
          >
            No have review
          </p>
        </div>
      )}
      {reviews.map((rv) => (
        <div className="review" key={rv._id} id="reviews">
          <p
            className="review-name"
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            {rv.name}
          </p>
          <div>
            <Rating value={rv.rating} />
          </div>
          <p
            className="review-time"
            style={{
              fontSize: "16px",
            }}
          >
            {rv.createdAt.substring(0, 10)}
          </p>
          <p
            className="review-des"
            style={{
              fontSize: "16px",
              paddingBottom: "5px",
            }}
          >
            {rv.comment}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
