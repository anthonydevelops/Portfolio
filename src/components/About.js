import React from "react";
import "../styles/About.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="row about-content no-gutters">
        <div className="col-12 col-lg-4 photo">
          <img
            id="myPhoto"
            src={require("../assets/profile.jpeg")}
            alt="Anthony"
          />
        </div>
        <div className="col-12 col-lg-8 description">
          <p>
            Hi! I'm Anthony. I'm a Freelance Web Developer and recent Computer Science graduate
            of University of California, Santa Cruz. Currently, I'm working for a small-business
            creating a full-stack application to help keep track of their incoming clients. On my own time,
            I'm learning more advanced topics dealing with web technologies, as well as exercising
            and playing Pokemon Go. I'm currently applying and open to interviewing for various
            full-time or contract positions.
          </p>
        </div>
      </div>
    );
  }
}
