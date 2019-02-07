import React from "react";
import "../styles/Software.css";
import { Row, Col } from "reactstrap";

export default class Software extends React.Component {
  render() {
    return (
      <div className="edu-content">
        <div>
          <h1 id="soft-title">Software</h1>
        </div>
        <Row className="text-center tech">
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 id="js">JavaScript</h3>
            <h5>
              Two years of experience designing front-end, back-end and scraping
              components in React.js, Node.js & Puppeteer.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 id="py">Golang</h3>
            <h5>
              One year of experience implementing back-end REST-ful API's and
              gRPC servers.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 id="em">Networking</h3>
            <h5>
              Two years of experience in Computer Networks, Network Programming,
              and Advanced Computer Networks through coursework and projects.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 id="web">Web</h3>
            <h5>
              Two years of experience working on various web applications for
              school and as fun side projects. Experience & knowledge in
              front-end and back-end processes and workflow.
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}
