import React, { Component } from "react";
import Laptop from "../images/laptop.png";
import sr from "./ScrollReveal";
import "../style/header.css";

export default class Header extends Component {
  componentDidMount = () => {
    const config = {
      origin: "top",
      duration: 2000,
      distance: "500px",
    };
    const config_2 = {
      origin: "right",
      duration: 2000,
      distance: "500px",
    };

    sr.reveal(".header-content-left", config);
    sr.reveal(".header-content-right", config_2);
  };
  render() {
    return (
      <>
        <header id="header">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="header-content-left">
                  <img src={Laptop} alt="" className="img-laptop" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-content-right">
                  <h1 className="display-4">Lorem ipsum dolor.</h1>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent tempor fringilla neque, nec scelerisque felis
                    tristique nec. Aenean et elit ullamcorper, tempor justo vel,
                    elementum lorem. Suspendisse suscipit lorem ut sem accumsan
                    luctus.
                  </p>
                  <a className="btn btn-outline-secondary btn-lg mt-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
