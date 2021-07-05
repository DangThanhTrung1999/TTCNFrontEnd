import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [find, setFind] = useState("");
  if(find===""){
    props.getFind("")
  }
  const handleFind = (e) => {
    e.preventDefault();
    props.getFind(find);
  };
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        backgroundColor: "white",
        zIndex: "2",
      }}
    >
      <div className="navigation">
        <div className="container">
          <nav className="nav">
            <div className="nav__hamburger">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="nav__logo">
              <Link to={"/"} className="scroll-link">
                PHONE
              </Link>
            </div>

            <div className="nav__menu">
              <div className="menu__top">
                <span className="nav__category">PHONE</span>
                <a href="#" className="close__toggle"></a>
              </div>
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to={"/"} className="nav__link scroll-link">
                    Home
                  </Link>
                </li>
                {userInfo && userInfo.isAdmin && (
                  <li className="nav__item">
                    <Link to={"/create"} className="nav__link scroll-link">
                      Create
                    </Link>
                  </li>
                )}
                {userInfo && userInfo.isAdmin && (
                  <li className="nav__item">
                    <Link
                      to={"/list"}
                      className="nav__link scroll-link"
                      style={{ width: "140px" }}
                    >
                      Manage Product
                    </Link>
                  </li>
                )}
                <li className="nav__item">
                  <Link
                    to={"/cart"}
                    className="nav__link scroll-link"
                    style={{ width: "70px" }}
                  >
                    My Cart
                  </Link>
                </li>
                {userInfo && userInfo.isAdmin && (
                  <li className="nav__item">
                    <Link
                      to={"/list-order"}
                      className="nav__link scroll-link"
                      style={{ width: "140px" }}
                    >
                      Manage Order
                    </Link>
                  </li>
                )}
                <li className="nav__item">
                  <a href="#contact" className="nav__link scroll-link">
                    Contact
                  </a>
                </li>
                {userInfo && !userInfo.isAdmin && (
                  <form style={{ width: "700px" }} onSubmit={handleFind}>
                    <div className="form-row" style={{ width: "700px" }}>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Find now"
                          style={{ height: "32px", fontSize: "16px" }}
                          defaultValue={find}
                          onChange={(e) => setFind(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ fontSize: "16px" }}
                        >
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </ul>
            </div>

            <div className="nav__icons">
              {userInfo ? (
                <Link
                  to="/profile"
                  style={{
                    paddingRight: "20px",
                    paddingTop: "5px",
                    textDecoration: "none",
                  }}
                >
                  {userInfo.fullName}
                </Link>
              ) : (
                <div>
                  <Link
                    to={"/login"}
                    title="Login"
                    style={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      fontSize: "18px",
                      lineHeight: "30px",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    title="Register"
                    style={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      fontSize: "18px",
                      lineHeight: "30px",
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}

              <Link to={"/cart"} className="icon__item">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
