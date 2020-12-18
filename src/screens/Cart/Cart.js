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
    <>
      {cartItems && (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ul className="cart-list-container">
                <li>
                  <h3>Shopping Cart</h3>
                </li>
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map((item) => (
                    <li style={{ display: "flex" }}>
                      <div className="cart-image" style={{ width: "120px" }}>
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
                      <div className="cart-price" style={{ width: "10%" }}>
                        {item.price}
                      </div>
                      <div>
                        Qty:
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(addToCart(item.product, e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="button"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="col-4">
              <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h3>
              <button
                onClick={checkoutHandler}
                className="button primary full-width"
                px
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
