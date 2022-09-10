import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/aryan-sharma-b58a59228/" target="__blank">
          Aryan Sharma
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/sharmaaryan517_official/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/aryan-sharma-b58a59228/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
       
      </div>
    </div>
  )
}
