import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
        </div>
        {/* <div>
          <Switch>
            <Route exact path="/" component={Planner} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/grades" component={Grades} />
            <Route path="/progress" component={Progress} />
          </Switch>
        </div> */}
      </Router>
    );
  }
}
