import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/order.action";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Order(props) {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);

  const { cartItems, shipping, payment } = cart;
  if (!shipping) {
    props.history.push("/buy");
  } else if (!payment) {
    props.history.push("/payment");
  }
  const dispatch = useDispatch();
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const notify = () => toast.success("Your ordered success!");

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cartItems,
        shipping,
        payment,
        itemsPrice,
      })
    );
    notify();
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      <ToastContainer />
      <div className="wrapper">
        <div className="margin-area">
          <div className="dot one">1</div>
          <div className="dot two">2</div>
          <div
            className="dot three"
            style={{
              background: " #0c84d9",
              color: "white",
            }}
          >
            3
          </div>
          <div
            className="dot four"
            style={{
              background: " #0c84d9",
              color: "white",
            }}
          >
            4
          </div>
          <div className="progress-bar first" />
          <div
            className="progress-bar second"
            style={{ background: "#0c84d9" }}
          />
          <div
            className="progress-bar third"
            style={{ background: "#0c84d9" }}
          />
          <div className="message message-1">
            Choose Product
            <div>
              <div className="message message-2">
                Address User
                <div>
                  <div className="message message-3">
                    Payment Method
                    <div>
                      <div className="message message-4">
                        Order Now<div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="profile-form" style={{ marginBottom: "20px" }}>
              <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                Address:
              </h3>
              <h3>
                {shipping.street}, {shipping.district},{shipping.city}
              </h3>
              <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                Phone:
              </h3>
              <h3>{shipping.phone}</h3>
            </div>
            <div className="profile-form" style={{ marginBottom: "20px" }}>
              <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                Payment method:
              </h3>
              <h3> {payment.payment}</h3>
            </div>
            <div className="profile-form" style={{ marginBottom: "20px" }}>
              <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                Your cart:
              </h3>
              <div>
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map((index, item) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        backgroundColor: "white",
                        marginBottom: "15px",
                        padding: "15px 0",
                        borderBottom: "solid 1px #ccc",
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
                      <div
                        className="cart-name"
                        style={{ width: "40%", paddingLeft: "10px" }}
                      >
                        <Link
                          to={"/detail?id=" + item.product}
                          style={{ textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                        <div>Quantity: {item.qty}</div>
                      </div>
                      <div className="cart-price">
                        {new Intl.NumberFormat().format(item.price)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <form
              onSubmit={handleOrder}
              className="profile-form"
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
                className="btn btn-block btn-warning"
                type="submit"
                style={{ padding: "5px", fontSize: "16px" }}
                disabled={cartItems.length === 0}
              >
                Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
