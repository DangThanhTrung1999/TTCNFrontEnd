import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayment } from "../../actions/cart.action";
function Payment(props) {
  const [payment, setPayment] = useState("ZaloPay");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePayment({ payment }));
    props.history.push("/order");
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
          <div className="dot four">4</div>
          <div className="progress-bar first" />
          <div
            className="progress-bar second"
            style={{ background: "#0c84d9" }}
          />
          <div className="progress-bar third" />
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

      <form
        className="profile-form"
        style={{ width: "33%" }}
        onSubmit={handleSubmit}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "26px",
            paddingBottom: "20px",
          }}
        >
          Payment Method
        </h3>

        <div class="form-check" style={{ paddingBottom: "20px" }}>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="payment"
              value="ZaloPay"
              defaultChecked
              onChange={(e) => setPayment(e.target.value)}
            />
            <span style={{ display: "inline-block", paddingLeft: "10px" }}>
              ZaloPay
            </span>
          </label>
        </div>
        <div class="form-check" style={{ paddingBottom: "20px" }}>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="payment"
              value="Momo"
              onChange={(e) => setPayment(e.target.value)}
            />
            <span style={{ display: "inline-block", paddingLeft: "10px" }}>
              Momo
            </span>
          </label>
        </div>
        <div class="form-check" style={{ paddingBottom: "20px" }}>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="payment"
              value="Pay on delivery"
              onChange={(e) => setPayment(e.target.value)}
            />
            <span style={{ display: "inline-block", paddingLeft: "10px" }}>
              Pay on delivery
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block profile-button"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Payment;
