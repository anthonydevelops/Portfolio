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
            Welcome! I am an aspiring full-stack developer, electronics
            hobbyist, and a senior computer science student at University of
            California, Santa Cruz. In the past years, I have focused on
            understanding the web and network programming by working on projects
            both in school and on my own. My goal is to become better at my
            craft and to eventually create novel solutions that will help those
            around me in my community. I have advanced knowledge in JavaScript
            and Golang, experience toying around with microcontrollers such as
            Arduino or Raspberry Pi, and have built various web applications
            such as the one you're viewing right now! Additionally, I'm
            currently taking courses in Software Engineering, Computer
            Architecture, and many more to follow before I graduate. I'm
            currently applying and interviewing for various Fulltime or
            Internship roles.
          </p>
        </div>
      </div>
    );
  }
}
