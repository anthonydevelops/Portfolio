import React from "react";
import "../styles/Experience.css";
import { Row, Col } from "reactstrap";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="exp-content">
        <div>
          <h1 id="exp-title">Experience</h1>
        </div>
        <Row className="exp">
          <Col className="role no-gutters" xs="12" md="12">
            <h2 id="healp">Freelance Web Developer</h2>
            <h4><i>H.E.A.L.P</i></h4>
            <h5>Jul 2019 - Present</h5>
            <p>
              Designed a full-stack web application to replace H.E.A.L.P's current
              client-tracking system, as well as created scripts to generate forms and
              invoices based on specified data.
            </p>
            <ul>
              <li>Parsed 300+ client statistics using Google Sheets API</li>
              <li>Created a Go server & REST-ful API that connects to MongoDB </li>
              <li>Designed a front-end using ReactJS to interact with the Go API</li>
            </ul>
          </Col>
          <Col className="role no-gutters" xs="12" md="12">
            <h2 id="cisco">Software Engineer Intern</h2>
            <h4><i>UC Santa Cruz - Baskin School of Engineering</i></h4>
            <h5>Jan 2019 - Jun 2019</h5>
            <p>
              (CISCO) Implemented an open-source full-stack web application for cloud-native
              applications that allows users to configure various plugin integrations and generate
              Go template code.
            </p>
            <ul>
              <li>Worked with various technologies such as: ReactJS, NodeJS, and Go</li>
              <li>Separated our application into microservices using Docker and Kubernetes</li>
              <li>Followed the Scrum/Agile framework</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
