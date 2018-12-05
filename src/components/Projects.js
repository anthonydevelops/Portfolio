import React from "react";
import { Button, Row, Col } from "reactstrap";
import "../styles/Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="pro-content">
        <div>
          <h1 id="project">Projects</h1>
        </div>
        <Row>
          <Col xs="12" md="6" className="myprojects">
            <h4 style={{ textAlign: "center" }}>UCSC Courses API</h4>
            <p>
              An Unofficial API for UCSC that gathers all course & professor
              data all in one repo and makes it easy to get the semi-latest
              information.
            </p>
            <Button>See more</Button>
          </Col>
          <Col xs="12" md="6" className="myprojects">
            <h4 style={{ textAlign: "center" }}>Slug Academic Organizer</h4>
            <p>
              A web app designed to help students keep track of their
              educational goals in fulfilling GEs and Major requirements.
            </p>
            <Button>See more</Button>
          </Col>
          <Col xs="12" md="6" className="myprojects">
            <h4 style={{ textAlign: "center" }}>URL Shortener Microservice</h4>
            <p>
              A microservice that allows the user to receive a shortened URL in
              JSON that routes to the original URL.
            </p>
            <Button>See more</Button>
          </Col>
          <Col md="12" className="text-center" />
        </Row>
      </div>
    );
  }
}
