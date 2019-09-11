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
      </div >
    );
  }
}
