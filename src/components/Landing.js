import React from "react";
import "../styles/Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="caption">
        <span id="name">
          <h1>Anthony Campos</h1>
        </span>
        <span id="opener">
          <h4>
            A freelance web developer passionate about software architecture,
            web security, and developer productivity
          </h4>
        </span>
        <br />
        <a
          tabIndex="1"
          className="landing-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/anthonydevelops"
        >
          <i className="brand-icons fab fa-github-square fa-3x" />
        </a>
        <a
          tabIndex="2"
          className="landing-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anthonyacampos/"
        >
          <i className="brand-icons fab fa-linkedin fa-3x" />
        </a>
        <a
          tabIndex="3"
          className="landing-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/anthonydevelops"
        >
          <i className="brand-icons fab fa-twitter-square fa-3x" />
        </a>

      </div>
    );
  }
}
