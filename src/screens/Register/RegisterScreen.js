import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/user.action";
import "./Register.css";
function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister ? userRegister : {};
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
    dispatch(register(name, email, password));
  };
  return (
    <div className="container-fluid register">
      <div className="row login-vertical">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5" style={{ width: "80%" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Sign up</h3>
              {loading && <div className="text-center">Loading...</div>}
              {error && (
                <div className="text-center" style={{ color: "red" }}>
                  Have error when register
                </div>
              )}
              <form className="form-signin" onSubmit={handleSubmitForm}>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    name="name"
                    className="form-control input"
                    placeholder="Name"
                    required
                    autofocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="inputName">Name</label>
                </div>
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
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Register
                </button>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      props.history.push("/login");
                    }, 1000);
                  }}
                  className="btn btn-lg btn-secondary btn-block text-uppercase"
                >
                  I had account. Sign in now !
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
