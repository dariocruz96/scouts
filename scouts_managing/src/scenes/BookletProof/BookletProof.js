// React
import React from "react";
// Components
import NavigationBar from "./../NavigationBar";

const BookletProof = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div>Hello BookletProof Page</div>
    </React.Fragment>
  );
};

export default BookletProof;
