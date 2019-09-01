import React from "react";
import "../styles/Software.css";
import { Row, Col } from "reactstrap";

export default class Software extends React.Component {
  render() {
    return (
      <div className="software-content">
        <div>
          <h1 id="soft-title">Software</h1>
        </div>
        <Row className="tech">
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
            <h3 id="em">Databases</h3>
            <h5>
              Two years of experience working with relational & non-relational databases
              such as MongoDB, PostgreSQL, and MySQL.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 id="web">Web</h3>
            <h5>
              Two years of experience working on various web applications for
              school, side projects, and freelance work.
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}
