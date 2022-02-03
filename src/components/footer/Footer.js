import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="row">
          <div className="col-sm-6 col-lg-8 col-md-8">
            <p>Copyright © Anny Karolina Sánchez Rodríguez</p>
          </div>
          <div id="social-network" class="col-sm-4 col-lg-4 col-md-4">
            <a href="#" className="pl-2" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-mobile-alt"></i>
            </a>
            <a href="#" className="pl-2" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope"></i>
            </a>
            <a href="#" className="pl-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="pl-2" target="_blank" rel="noopener noreferrer">
              <i className="far fa-arrow-alt-circle-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
