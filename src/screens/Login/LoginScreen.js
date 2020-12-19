import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/user.action";
import "./Login.css";
function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className="container-fluid login">
      <div className="row login-vertical">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5" style={{ width: "80%" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>
              {loading && <div className="text-center">Loading...</div>}
              {error && (
                <div className="text-center" style={{ color: "red" }}>
                  Your email or password wrong !
                </div>
              )}
              <form className="form-signin" onSubmit={handleSubmitForm}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    className="form-control input"
                    placeholder="Email address"
                    required
                    autofocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    name="password"
                    className="form-control input"
                    required
                    placeholder="Password "
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      props.history.push("/register");
                    }, 1000);
                  }}
                  className="btn btn-lg btn-secondary btn-block text-uppercase"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
