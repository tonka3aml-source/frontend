import React from "react";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/signin") {
    return;
  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <h4>Explorer</h4>
                <ul>
                  <li>
                    <Link to="#">Electric bikes</Link>
                  </li>
                  <li>
                    <Link to="#">City bikes</Link>
                  </li>
                  <li>
                    <Link to="#">Kid's bikes</Link>
                  </li>
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                  <li>
                    <Link to="#">Outlet</Link>
                  </li>
                  <li>
                    <Link to="#">Business</Link>
                  </li>
                  <li>
                    <Link to="#">Insurance Electric</Link>
                  </li>
                  <li>
                    <Link to="#">Size Guide</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>About</h4>
                <ul>
                  <li>
                    <Link to="#">About us</Link>
                  </li>
                  <li>
                    <Link to="#">Journal</Link>
                  </li>
                  <li>
                    <Link to="#">Reviews</Link>
                  </li>
                  <li>
                    <Link to="#">Press</Link>
                  </li>
                  <li>
                    <Link to="#">Jobs</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Help</h4>
                <ul>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">Delivery</Link>
                  </li>
                  <li>
                    <Link to="#">Assembly & manuals</Link>
                  </li>
                  <li>
                    <Link to="#">Payment options</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Join the ride.</h4>
            <p>Sign up for our newsletter.</p>
          </div>
        </div>
        <button className="btn btn-danger" onClick={ScrollToTop}>
          TOP
        </button>
      </div>
    </footer>
  );
};

export default Footer;
