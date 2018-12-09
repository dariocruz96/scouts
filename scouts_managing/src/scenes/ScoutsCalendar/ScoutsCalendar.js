// React
import React from "react";
// Components
import NavigationBar from "./../NavigationBar";

const ScoutsCalendar = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div>Hello ScoutsCalendar Page</div>
    </React.Fragment>
  );
};

export default ScoutsCalendar;
