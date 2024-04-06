import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#Home">
              Головна
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#TennisBenefits">
              Про теніс
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#GoogleLocation">
              Локація
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#Gallery">
              Галерея
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#Contacts">
              Контакти
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Volodymyr Mazepa | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
