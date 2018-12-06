import React from "react";
import { Button, Row, Col } from "reactstrap";
import "../styles/Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="pro-content">
        <div>
          <h1 id="pro-header">Projects</h1>
        </div>
        <Row className="project-row">
          <Col xs="12" md="4" className="myprojects">
            <h4 className="pro-titles" style={{ textAlign: "center" }}>
              UCSC Courses API
            </h4>
            <p>
              An Unofficial API for UCSC that gathers all course & professor
              data from the school search and Rate My Professor.
            </p>
            <div>
              <code>Node/Express | Puppeteer | MongoDB</code>
            </div>
          </Col>
          <Col xs="12" md="4" className="myprojects">
            <h4 className="pro-titles" style={{ textAlign: "center" }}>
              Slug Organizer
            </h4>
            <p>
              A web app designed to help students keep track of their
              educational goals in fulfilling GEs and Major requirements.
            </p>
            <div>
              <code>React | Node/Express | MongoDB</code>
            </div>
          </Col>
          <Col xs="12" md="4" className="myprojects">
            <h4 className="pro-titles" style={{ textAlign: "center" }}>
              URL Shortener
            </h4>
            <p>
              A microservice that allows the user to receive a shortened URL in
              JSON that routes to the original URL.
            </p>
            <div>
              <code>Node/Express | HTML/CSS | MongoDB</code>
            </div>
          </Col>
          <Col
            xs="12"
            className="myprojects"
            style={{ marginTop: "5%", fontStyle: "italic" }}
          >
            <h4>More in the works, stay tuned!</h4>
          </Col>
          <Col className="pro-button">
            <Button
              href="https://github.com/anthonydevelops"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              style={{ backgroundColor: "#282828" }}
            >
              See more
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
