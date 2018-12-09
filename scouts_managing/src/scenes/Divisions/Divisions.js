// React
import React from "react";
// Components
import NavigationBar from "./../NavigationBar";

const Divisions = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div>Hello Divisions Page</div>
    </React.Fragment>
  );
};

export default Divisions;
