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
import BookletProof from "./scenes/BookletProof";
import Divisions from "./scenes/Divisions";
import Elements from "./scenes/Elements";
import Home from "./scenes/Home";
import Login from "./scenes/Login";
import ScoutsCalendar from "./scenes/ScoutsCalendar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/divisions" component={Divisions} />
            <Route path="/bookletproof" component={BookletProof} />
            <Route path="/elements" component={Elements} />
            <Route path="/scoutscalendar" component={ScoutsCalendar} />
            <Route
              path="/"
              render={() => {
                return <Redirect to={"/home"} />;
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
