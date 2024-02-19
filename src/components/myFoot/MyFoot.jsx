import React from "react";

const MyFoot = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="row py-6">
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Company</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Brand Center
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Help center</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Discord Server
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Legal</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Licensing
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Download</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  iOS
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Android
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  Windows
                </a>
              </li>
              <li className="mb-2">
                <a href="./index.html" className="text-muted">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted mb-0">
            © 2023{" "}
            <a href="https://flowbite.com/" className="text-dark">
              Flowbite™
            </a>
            . All Rights Reserved.
          </p>
          <div className="mt-3">
            <a href="./index.html" className="text-muted me-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="./index.html" className="text-muted me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="./index.html" className="text-muted me-4">
              <i className="fab fa-discord"></i>
            </a>
            <a href="./index.html" className="text-muted">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFoot;
