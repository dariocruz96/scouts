// React
import React from "react";
// Components
import NavigationBar from "./../NavigationBar";

const Elements = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div>Hello Elements Page</div>
    </React.Fragment>
  );
};

export default Elements;
