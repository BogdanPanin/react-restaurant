import React from "react";
import Form from "./Form";
import facebook from "../assets/images/facebook.webp";
import picture from "../assets/images/picture.webp";
import twitter from "../assets/images/twiter.webp";
import instagram from "../assets/images/instagram.webp";

function Footer() {
  return (
    <div className="footer">
      <Form></Form>
      <div className="footer-text">
        <h3>
          <span className="footer-text-span">ПОДПИШИТЕСЬ</span>
        </h3>
        <h3>
          <span className="footer-text-span">НА НОВОСТИ</span>
        </h3>
      </div>
      <div className="line footer-line"></div>
      <div className="footer-menu">
        <nav className="page-nav-label label-footer">
          <ul className="menu-label">
            <li className="menu-item-label label-footer">
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="img" className="label-img " />
              </a>
            </li>
            <li className="menu-item-label label-footer">
              <a href="/">
                <img src={picture} alt="img" className="label-img " />
              </a>
            </li>
            <li className="menu-item-label label-footer">
              <a href="https://twitter.com/?lang=ru">
                <img src={twitter} alt="img" className="label-img " />
              </a>
            </li>
            <li className="menu-item-label label-footer">
              <a href="https://www.instagram.com/ateist_01/?hl=ru">
                <img src={instagram} alt="img" className="label-img " />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
