import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "../Components/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>Vetron it Services</h2>
          <div className="menu-link">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>

          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="  " target="_thapa">
                  <FaFacebookSquare />
                </a>
              </li>
            </ul>

            <ul className="social-media-desktop">
              <li>
                <a href="  " target="_thapa">
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
            <ul className="social-media-desktop">
              <li>
                <a href="  " target="_thapa">
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
