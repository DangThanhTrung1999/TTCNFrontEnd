import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { logout, update } from "../../actions/user.action";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { listMyOrders } from "../../actions/order.action";
import "react-toastify/dist/ReactToastify.css";

function Profile(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate || {};
  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } =
    myOrderList || {};
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.fullName);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
  }, [userInfo]);
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/login");
  };
  const notify = () => toast.success("Udpate user success!");
  const submitFormUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
    setPassword("");
    setTimeout(() => {
      notify();
    }, 1000);
  };
  return (
    <div className="container">
      <ToastContainer />
      <div
        className="row"
        style={{ paddingTop: "40px", paddingBottom: "100px" }}
      >
        <div className="col-4">
          <form onSubmit={submitFormUpdate} className="profile-form">
            <h3
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "26px",
                paddingBottom: "20px",
              }}
            >
              User Information
            </h3>

            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                className="form-control profile-input"
                placeholder="Enter name"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control profile-input"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control profile-input"
                placeholder="Enter password"
                id="pwd"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block profile-button"
            >
              Update
            </button>
            <button
              className="btn btn-warning btn-block profile-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
        <div className="col-8">
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "26px",
              paddingBottom: "20px",
            }}
          >
            My order
          </h3>
          {loadingOrders ? (
            <div>Loading...</div>
          ) : errorOrders ? (
            <div>{errorOrders} </div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DETAIL</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.createdAt}</td>
                    <td>{new Intl.NumberFormat().format(order.itemsPrice)}</td>
                    <td>{!order.isPaid ? "No" : "Yes"}</td>
                    <td>
                      <Link to={"/order-detail/" + order._id}>Detail</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
