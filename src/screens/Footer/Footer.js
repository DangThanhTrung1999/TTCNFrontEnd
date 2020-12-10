import React from "react";
import "./Footer.css";
function Footer(props) {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3 className="footer__header">extras</h3>
            <ul className="footer__list">
              <li className="footer__item">Brands</li>
              <li className="footer__item">Gift Certificates</li>
              <li className="footer__item">Affiliate</li>
              <li className="footer__item">Specials</li>
              <li className="footer__item">Site Map</li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="footer__header">information</h3>
            <ul className="footer__list">
              <li className="footer__item">About Us</li>
              <li className="footer__item">Privacy Policy</li>
              <li className="footer__item">Terms & Conditions</li>
              <li className="footer__item">Contact Us</li>
              <li className="footer__item">Site Map</li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="footer__header">my account</h3>
            <ul className="footer__list">
              <li className="footer__item">My Account</li>
              <li className="footer__item">Wish List</li>
              <li className="footer__item">Affiliate</li>
              <li className="footer__item">Newsletter</li>
              <li className="footer__item">Returns</li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="footer__header">contact us</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <i class="fa fa-map-marker footer__i" aria-hidden="true"></i>
                <span>Da Nang University, 54 Nguyen Luong Bang Street</span>
              </li>
              <li className="footer__item">
                <i class="fa fa-envelope-o footer__i" aria-hidden="true"></i>
                <span>dn@gmail.com</span>
              </li>
              <li className="footer__item ">
                <i class="fa fa-phone footer__i" aria-hidden="true"></i>
                <span>123456789</span>
              </li>
              <li className="footer__item">
                <i class="fa fa-telegram footer__i" aria-hidden="true"></i>
                <span>Da Nang, Viet Nam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
