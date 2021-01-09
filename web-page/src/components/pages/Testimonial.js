import React, { Component } from "react";
import "../../style/testimonial.css";
import sr from "../ScrollReveal";

export default class Testimonial extends Component {
  componentDidMount = () => {
    const config = {
      origin: "left",
      duration: 2000,
      distance: "500px",
      viewFactor: 0.2,
    };
    sr.reveal("#testimonial", config);
  };
  render() {
    return (
      <>
        <section id="testimonial">
          <div className="container">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tempor fringilla neque, nec scelerisque felis tristique nec.
              Aenean et elit ullamcorper, tempor justo vel, elementum lorem.
              Suspendisse suscipit lorem ut sem accumsan luctus. Mauris posuere
              maximus turpis, non tempor velit mattis sit amet. Donec justo
              dolor, vestibulum et nisl ac, dapibus venenatis urna.
            </p>
            <p className="h4">-Julio Palacios</p>
          </div>
        </section>
      </>
    );
  }
}
