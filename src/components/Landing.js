import React from "react";
import "../styles/Landing.css";

const dev = ["Developer", "Engineer", "Designer", "Freelancer"]
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devTextIndex: 0
    }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currIndex = this.state.devTextIndex
      this.setState({
        devTextIndex: currIndex + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let devText = dev[this.state.devTextIndex % dev.length]
    return (
      <div className="landing-wrapper">
        <div className="caption">
          <div id="name">
            <h1>Anthony Campos</h1>
          </div>
          <div id="opener">
            <p>
              <span className="flash">{devText}</span> passionate about software architecture,
                web security, and developer productivity
          </p>
          </div>
          <br />
        </div>
        {/* <div className="social-media">
          <a
            tabIndex="1"
            className="landing-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anthonydevelops"
          >
            <i className="brand-icons fab fa-github-square fa-3x" />
          </a>
          <a
            tabIndex="2"
            className="landing-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anthonyacampos/"
          >
            <i className="brand-icons fab fa-linkedin fa-3x" />
          </a>
          <a
            tabIndex="3"
            className="landing-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/anthonydevelops"
          >
            <i className="brand-icons fab fa-twitter-square fa-3x" />
          </a>
        </div> */}
      </div >
    );
  }
}
