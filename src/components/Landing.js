import React from "react";
import "../styles/Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="caption">
          <span id="name">
            <h1>Anthony Campos</h1>
          </span>
          <span id="opener">
            <h4>
              A software hobbyist passionate about web technologies,
              electronics, and open source
            </h4>
          </span>
          <br />
          <a href="https://github.com/anthonydevelops">
            <i class="brand-icons fab fa-github-square fa-3x" />
          </a>
          <a href="https://twitter.com/anthonydevelops">
            <i class="brand-icons fab fa-linkedin fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/anthonyacampos/">
            <i class="brand-icons fab fa-twitter-square fa-3x" />
          </a>
        </div>
      </div>
    );
  }
}
