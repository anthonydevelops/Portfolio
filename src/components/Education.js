import React from "react";
import "../styles/Education.css";
import { Row, Col } from "reactstrap";

export default class Software extends React.Component {
  render() {
    return (
      <div className="edu-content">
        <div className="text-left">
          <h1 id="software">Software</h1>
        </div>
        <Row className="text-center tech">
          <Col className="lang" xs="12" md="6">
            <h3 id="js">JavaScript</h3>
            <h5>
              Two years of experience designing front-end, back-end and scraping
              components in React.js, Node.js & Puppeteer.
            </h5>
          </Col>
          <Col className="lang" xs="12" md="6">
            <h3 id="py">Python</h3>
            <h5>
              One year of experience writing various scripts and implementing
              back-end processes for web applications.
            </h5>
          </Col>
          <Col className="lang" xs="12" md="6">
            <h3 id="em">Embedded</h3>
            <h5>
              One year of microcontroller programming and design for Arduino and
              Raspberry Pi to make funny hobby projects or gifts.
            </h5>
          </Col>
          <Col className="lang" xs="12" md="6">
            <h3 id="web">Web</h3>
            <h5>
              Two years of working on various web applications for school and as
              fun side projects. Experience & knowledge in front-end and
              back-end processes and workflow.
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}
