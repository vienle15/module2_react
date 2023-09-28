import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Footers extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="secContent">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Giày Chú Viễn
                </h6>
                <p>Giày chú Viễn, đỉnh của giày.</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Sản Phẩm</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Giày đi rừng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Giày chiến đấu
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Giày quái dị
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Giày người thường
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Thương Hiệu</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Nike
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Valentino
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Balenciaga
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Gucci
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
                <p>
                  <i className="fas fa-home me-3" /> Detroit
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  eminem@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2045 Copyright:
          <a className="text-reset fw-bold" href="#">
            Viễn Bán Giày
          </a>
        </div>
        {/* Copyright */}
      </footer>
    );
  }
}

export default Footers;
