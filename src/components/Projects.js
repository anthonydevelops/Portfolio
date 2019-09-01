import React from "react";
import { Row, Col } from "reactstrap";
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
            <h4 className="pro-titles">
              <a href="https://github.com/anthonydevelops/osseus">Osseus</a>
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
            <h4 className="pro-titles">
              <a href="https://github.com/chtzou/Slug-Academic-Organizer">Slug Organizer</a>
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
            <h4 className="pro-titles">
              <a href="https://github.com/anthonydevelops/ucsc-jobs-api">UCSC Jobs API</a>
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
        </Row>
      </div>
    );
  }
}
