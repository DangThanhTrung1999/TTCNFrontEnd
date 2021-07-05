import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductDetail.css";
import {
  detailsProduct,
  saveProductReview,
} from "../../actions/product.action";
import Rating from "../../common/Rating/Rating";

function +ProductDetail(props) {
  const productDetail = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [amount, setAmount] = useState(1);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const { product, loading, error } = productDetail;

  let reviews = product ? product.reviews : [];
  let id = props.location.search.split("=")[1];
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [id]);

  const submitReview = (e) => {
    e.preventDefault();
    dispatch(
      saveProductReview(id, {
        name: userInfo.fullName,
        rating: rating,
        comment: comment,
      })
    );
    dispatch(detailsProduct(id));
    setRating(1);
    setComment("");
  };
  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    if (amount >= 2) {
      setAmount(amount - 1);
    }
  };
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
              <td>
                {product ? new Intl.NumberFormat().format(product.price) : ""}
              </td>
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
            <tr style={{ paddingLeft: "10px", display: "block" }}>
              <div className="quantity-input" style={{ marginBottom: "5px" }}>
                <button
                  className="quantity-input__modifier quantity-input__modifier--left"
                  onClick={decrement}
                >
                  &mdash;
                </button>
                <input
                  className="quantity-input__screen"
                  type="text"
                  value={amount}
                  readonly
                />
                <button
                  className="quantity-input__modifier quantity-input__modifier--right"
                  onClick={increment}
                >
                  &#xff0b;
                </button>
              </div>
              <button
                className="btn btn-warning"
                style={{ padding: "10px 20px", fontSize: "16px" }}
                onClick={() => {
                  props.history.push("/cart/" + id + "?amount=" + amount);
                }}
              >
                Buy now
              </button>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <h2>Write review</h2>
        {userInfo ? (
          <form onSubmit={submitReview}>
            <table className="form-container" style={{ marginBottom: "20px" }}>
              <tr>
                <td>
                  <label htmlFor="rating">Rating</label>
                </td>
                <td style={{ paddingLeft: "10px" }}>
                  <select
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  >
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="comment">Comment</label>
                </td>
                <td style={{ paddingLeft: "10px" }}>
                  <textarea
                    name="comment"
                    value={comment}
                    style={{ padding: "5px" }}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  Submit
                </button>
              </tr>
            </table>
          </form>
        ) : (
          <div>
            Please <Link to="/login">Sign-in</Link> to review.
          </div>
        )}
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
