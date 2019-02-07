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
              Ligato Osseus
            </h4>
            <p>
              Implementing a full-stack web application on top of CN-Infra, a
              plugin life-cycle management agent, that allows for the user to
              configure various plugin integrations and generate Go template
              code that processes the plugins to work together.
            </p>
            <div style={{ textAlign: "center" }}>
              <code>Golang | React | Docker</code>
            </div>
          </Col>
          <Col xs="12" md="4" className="myprojects">
            <h4 className="pro-titles" style={{ textAlign: "center" }}>
              Slug Organizer
            </h4>
            <p>
              Designed a full-stack web application for students at UC Santa
              Cruz, which allows for quarterly/yearly planning, class
              information, and grade tracking. Used Puppeteer for scraping 1000+
              class pages and built a REST API to handle CRUD operations.
            </p>
            <div style={{ textAlign: "center" }}>
              <code>React | Node/Express | MongoDB</code>
            </div>
          </Col>
          <Col xs="12" md="4" className="myprojects">
            <h4 className="pro-titles" style={{ textAlign: "center" }}>
              UCSC Jobs API
            </h4>
            <p>
              Built a REST API for University of California, Santa Cruz that
              gathers all the latest job listings on campus and allows for
              queries to distinguish from Job ID, workstudy, and non-workstudy.
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
              <code>Python | Golang</code>
            </div>
          </Col>
          <Col
            xs="12"
            className="myprojects"
            style={{
              marginTop: "5%",
              fontStyle: "italic",
              textAlign: "center"
            }}
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
