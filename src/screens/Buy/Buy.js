import React, { useState } from "react";
import Bar from "../../common/Bar/Bar";
import { useDispatch } from "react-redux";
import { saveShipping } from "../../actions/cart.action";
function Buy(props) {
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ street, district, city, phone }));
    props.history.push("/payment");
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
          <div className="dot three">3</div>
          <div className="dot four">4</div>
          <div className="progress-bar first" />
          <div className="progress-bar second" />
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
          Address
        </h3>

        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            required
            autoFocus
            onChange={(e) => setStreet(e.target.value)}
            className="form-control profile-input"
            placeholder="Enter street"
            id="street"
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            required
            autoFocus
            onChange={(e) => setDistrict(e.target.value)}
            className="form-control profile-input"
            placeholder="Enter district"
            id="district"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="form-control profile-input"
            placeholder="Enter city"
            id="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="text"
            className="form-control profile-input"
            required
            autoFocus
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            id="phoneNumber"
          />
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

export default Buy;
