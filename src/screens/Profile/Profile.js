import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";

function Profile(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //   const userUpdate = useSelector(state => state.userUpdate);
  //   const { loading, success, error } = userUpdate;
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.fullName);
      setPassword(userInfo.password);
    }
  }, [userInfo]);

  return (
    <div className="container">
      <div
        className="row"
        style={{ paddingTop: "40px", paddingBottom: "100px" }}
      >
        <div className="col-4">
          <form action="/action_page.php" className="profile-form">
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
            <button className="btn btn-warning btn-block profile-button">
              Logout
            </button>
          </form>
        </div>
        <div className="col-8" style={{ backgroundColor: "yellow" }}>
          sdsds
        </div>
      </div>
    </div>
  );
}

export default Profile;
