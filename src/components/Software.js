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
            <h3 className="skills">JavaScript</h3>
            <h5>
              One year of experience designing front-end, back-end and scraping
              components in React.js, Node.js and Puppeteer. Advanced understanding
              in JavaScript's single-threaded model, best practices, and ES6 standard
              syntax.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 className="skills">Golang</h3>
            <h5>
              One year of experience implementing back-end REST-ful API's and
              gRPC servers. Strong understanding of Go development workflows,
              structure, and concurrency model.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 className="skills">Databases</h3>
            <h5>
              One year of experience working with relational and non-relational databases
              such as MongoDB, PostgreSQL, and MySQL. Experience with cloud-native datastores
              such as Etcd.
            </h5>
          </Col>
          <Col className="lang no-gutters" xs="12" md="6">
            <h3 className="skills">Web</h3>
            <h5>
              One year of experience working on various web applications for
              school, side projects, and freelance work. Solid understanding of web
              networking, security, and design.
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}
