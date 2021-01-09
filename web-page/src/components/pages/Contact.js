import React, { Component } from "react";
import "../../style/contact.css";
import Logo from "../../images/julio-logo.png";
import sr from "../ScrollReveal";

export default class Contact extends Component {
  componentDidMount = () => {
    const config = {
      origin: "top",
      duration: 2000,
      distance: "500px",
    };

    sr.reveal(".header-content-right", config);
  };
  render() {
    return (
      <>
        <footer id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <form className="my-4">
                  <div className="mb-3">
                    <label htmlFor="InputName1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputName1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="FormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="FormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-outline-secondary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-7">
                <div className="header-content-right">
                  <img src={Logo} alt="" className="img-logo" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
