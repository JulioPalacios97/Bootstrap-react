import React, { Component } from "react";
import Laptop2 from "../../images/laptop-2.png";
import "../../style/information.css";
import sr from "../ScrollReveal";

export default class Information extends Component {
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

    sr.reveal(".info-left", config);
    sr.reveal(".info-right", config_2);
  };
  render() {
    return (
      <>
        <section id="info-one">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="info-left">
                  <img src={Laptop2} alt="" className="img-laptop-2" />
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className="info-right">
                  <h2>Lorem ipsum dolor.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent tempor fringilla neque, nec scelerisque felis
                    tristique nec. Aenean et elit ullamcorper, tempor justo vel,
                    elementum lorem. Suspendisse suscipit lorem ut sem accumsan
                    luctus.
                  </p>
                  <a className="btn btn-outline-secondary btn-lg">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
