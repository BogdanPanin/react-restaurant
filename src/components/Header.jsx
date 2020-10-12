import React from "react";
import facebook from "../assets/images/facebook.webp";
import picture from "../assets/images/picture.webp";
import twitter from "../assets/images/twiter.webp";
import instagram from "../assets/images/instagram.webp";

function Header() {
  let [visible, setVisible] = React.useState(false);
  const span = ["menu "];
  let isOpen = () => {
    setVisible(!visible);
    console.log("true");
  };
  if (visible == true) {
    span.push(" active");
  }
  return (
    <header className="page-header">
      <div className="baner">
        <h1 className="baner-title">СОЛЬ И ПЕРЕЦ</h1>
      </div>
      <nav className="page-nav">
        <button
          id="btn"
          className="menu-button"
          onClick={() => isOpen()}
        ></button>
        <ul id="menu" className={span}>
          <li className="menu-item media">
            <a href="/" className="link link-main">
              Главная
            </a>
          </li>
          <li className="menu-item media">
            <a href="/" className="link">
              Блог
            </a>
          </li>
          <li className="menu-item media">
            <a href="/" className="link">
              Обо мне
            </a>
          </li>
        </ul>
      </nav>
      <nav className="page-nav-label one">
        <ul className="menu-label">
          <li className="menu-item-label">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="" className="label-img" />
            </a>
          </li>
          <li className="menu-item-label">
            <a href="/">
              <img src={picture} alt="" className="label-img" />
            </a>
          </li>
          <li className="menu-item-label">
            <a href="https://twitter.com/?lang=ru">
              <img src={twitter} alt="" className="label-img" />
            </a>
          </li>
          <li className="menu-item-label">
            <a href="https://www.instagram.com/ateist_01/?hl=ru">
              <img src={instagram} alt="" className="label-img" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="baner-img"></div>
    </header>
  );
}

export default Header;
