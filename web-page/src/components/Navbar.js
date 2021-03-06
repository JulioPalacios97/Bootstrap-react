import React, { Component } from "react";
import "../style/navbar.css";
import Header from "./Header";
import Testimonial from "./pages/Testimonial";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import { Link } from "react-scroll";
import { scrollToTop, scrollToBottom } from "./SmoothScrolling";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#header">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="header" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="info-one"
                    exact="true"
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="contact"
                    onClick={scrollToBottom}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Header />
        <Testimonial />
        <Information />
        <Contact />
      </>
    );
  }
}
