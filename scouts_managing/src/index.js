import React, { Component } from "react";
import ReactDOM from "react-dom";
// React Router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
// Components
import Home from "./scenes/Home";
import Login from "./scenes/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route
            path="/"
            render={() => {
              return <Redirect to={"/login"} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
