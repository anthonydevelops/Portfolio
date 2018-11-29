import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="main">
            <div className="container">
              <NavBar />
              <Switch>
                <Route exact path="/" component={Landing} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
