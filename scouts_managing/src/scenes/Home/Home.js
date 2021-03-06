// React
import React from "react";
// Components
import NavigationBar from "./../NavigationBar";

const Home = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div>Hello Home page</div>
    </React.Fragment>
  );
};

export default Home;
