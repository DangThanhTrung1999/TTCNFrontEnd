import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log("userInfo ", userInfo);
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
                  <a href="#contact" className="nav__link scroll-link">
                    Contact
                  </a>
                </li>
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

              <a href="#" className="icon__item">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>

              <a href="#" className="icon__item">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>

                <span id="cart__total">0</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;