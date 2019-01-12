// React
import React, { Component } from "react";
// Globals
import translations from "./../../config/translations";
// Styles
import styles from "./Divisions.css";
// Components
import DivisionRow from "./components/DivisionRow";
import NavigationBar from "./../NavigationBar";

class Divisions extends Component {
  listOfDivisions = () => {
    const divisions = [
      { name: `${translations.divisionsScreen.cheifs}`, width: "20%" },
      { name: `${translations.divisionsScreen.scouts}`, width: "40%" },
      { name: `${translations.divisionsScreen.explorers}`, width: "60%" },
      { name: `${translations.divisionsScreen.walkers}`, width: "80%" },
      { name: `${translations.divisionsScreen.wolfs}`, width: "100%" }
    ];
    return divisions;
  };
  render() {
    const Divisions = this.listOfDivisions();
    return (
      <React.Fragment>
        <NavigationBar navigateTo={this.props.history} />
        <div style={styles.title}>{translations.divisionsScreen.title}</div>
        <div style={styles.mainContainer}>
          {Divisions.map((division, index) => {
            return (
              <DivisionRow
                key={index}
                name={division.name}
                width={division.width}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Divisions;
