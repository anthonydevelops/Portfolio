import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Portfolio from "../assets/portfolio.jpeg"
import Osseus from "../assets/osseus.jpeg"

import "../styles/Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="pro-content">
        <div>
          <h1 id="pro-header">Projects</h1>
        </div>
        <Row className="project-row">
          <Col xs="12" md="6" className="myprojects">
            <Card id="osseus">
              <CardImg top style={{ width: "500px", height: "250px", textAlign: "center", marginBottom: "1vh" }} src={Osseus} alt="osseus project" />
              <CardBody>
                <CardTitle>Osseus</CardTitle>
                <CardSubtitle><i>Go, ReactJS, Docker, CN-Infra</i></CardSubtitle>
                <CardText>
                  Implemented an open-source full-stack web application for cloud-native
                  applications that allows users to configure various plugin integrations
                  and generate Go template code.
                  </CardText>
                <Button aria-label="link" style={{ backgroundColor: "#097DBC", border: "1px solid #097DBC", color: "white" }} target="_blank"
                  rel="noopener noreferrer" href="https://github.com/anthonydevelops/osseus" >
                  Source Code
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" className="myprojects">
            <Card id="portfolio">
              <CardImg top style={{ width: "500px", height: "250px", textAlign: "center", marginBottom: "1vh" }} src={Portfolio} alt="portfolio project" />
              <CardBody>
                <CardTitle>Portfolio</CardTitle>
                <CardSubtitle><i>ReactJS, Reactstrap</i></CardSubtitle>
                <CardText>
                  Built a portfolio web application that shows all of my accolades so far
                  as a software engineer. Anyone interested will be able to see a blurb about me,
                  my experience, skills, and projects.
                  </CardText>
                <Button aria-label="link" style={{ backgroundColor: "#097DBC", border: "1px solid #097DBC", color: "white" }} target="_blank"
                  rel="noopener noreferrer" href="https://github.com/anthonydevelops/portfolio" >
                  Source Code
                </Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}