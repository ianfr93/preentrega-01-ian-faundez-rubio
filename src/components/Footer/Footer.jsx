import React from "react";
import "./Footer.css";

import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
               
                <div className="footer-text">
                  <h4>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit, Lorem ipsum dolor sit amet.
                  </h4>
                </div>
                <div className="footer-contact-info">
                  <span>
                    <i className="fas fa-map-marker-alt"></i> 1010 Avenue, sw
                    54321, Chandigarh
                  </span>
                  <span>
                    <i className="fas fa-phone"></i> +9876543210
                  </span>
                  <span>
                    <i className="far fa-envelope-open"></i>{" "}
                    mail@info.com
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram instagram-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube youtube-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-tiktok tiktok-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp whatsapp-bg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved{" "}
                  <a href="https://www.iafru.cl">iafru-desing</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
