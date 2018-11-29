import React from "react";
import "../styles/About.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="row about-content no-gutters">
        <div className="col-12 col-lg-4 photo">
          <img
            id="myPhoto"
            src={require("../images/profile-photo.jpg")}
            alt="Anthony"
          />
        </div>
        <div className="col-12 col-lg-8 description">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    );
  }
}
