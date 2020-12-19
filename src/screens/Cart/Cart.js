import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart.action";
import { Link } from "react-router-dom";
function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart || [];
  const productId = props.location.pathname.split("/")[2];
  const amount = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  console.log({ productId, amount });

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, amount));
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      {cartItems && (
        <div className="container" style={{ paddingTop: "40px" }}>
          <div className="row">
            <div className="col-8">
              <div className="cart-list-container">
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "white",
                        marginBottom: "15px",
                        padding: "15px 0",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        className="cart-image"
                        style={{ width: "120px", paddingLeft: "20px" }}
                      >
                        <img
                          src={`/api/uploads/${item.image}`}
                          alt="product"
                          style={{ width: "100px" }}
                        />
                      </div>

                      <div style={{ width: "30%" }}>
                        <Link
                          to={"/detail?id=" + item.product}
                          style={{ textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                      </div>
                      <div className="cart-price" style={{ width: "15%" }}>
                        {new Intl.NumberFormat().format(item.price)}
                      </div>
                      <div
                        className="quantity-input"
                        style={{ marginBottom: "5px" }}
                      >
                        <button
                          className="quantity-input__modifier quantity-input__modifier--left"
                          onClick={() =>
                            dispatch(
                              addToCart(
                                item.product,
                                item.qty - 1 > 0 ? item.qty - 1 : 1
                              )
                            )
                          }
                        >
                          &mdash;
                        </button>
                        <input
                          className="quantity-input__screen"
                          type="text"
                          value={item.qty}
                          readonly
                        />
                        <button
                          className="quantity-input__modifier quantity-input__modifier--right"
                          onClick={() =>
                            dispatch(addToCart(item.product, item.qty + 1))
                          }
                        >
                          &#xff0b;
                        </button>
                      </div>
                      <div style={{ paddingLeft: "20px" }}>
                        <button
                          type="button"
                          style={{ padding: "5px", fontSize: "16px" }}
                          className="btn btn-danger"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  backgroundColor: "white",
                  marginBottom: "15px",
                  padding: "15px 15px",
                  borderRadius: "5px",
                }}
              >
                <h3>
                  Total ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :{" "}
                  {"  "}
                  {new Intl.NumberFormat().format(
                    cartItems.reduce((a, c) => a + c.price * c.qty, 0)
                  )}
                </h3>
                <button
                  onClick={checkoutHandler}
                  className="btn btn-block btn-success"
                  style={{ padding: "5px", fontSize: "16px" }}
                  disabled={cartItems.length === 0}
                >
                  Confirm cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
