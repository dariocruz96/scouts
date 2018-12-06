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
import Elements from "./scenes/Elements";
import Home from "./scenes/Home";
import Login from "./scenes/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/elements" component={Elements} />
            <Route
              path="/"
              render={() => {
                return <Redirect to={"/login"} />;
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
