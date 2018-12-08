// React
import React, { Component } from "react";
// Globals
import icons from "./../../config/icons";
import translations from "./../../config/translations";
// Styles
import styles from "./NavigationBar.css";

class NavigationBar extends Component {
  handleNavigateToHome = () => {
    this.props.navigateTo.push("./home");
  };
  handleNavigateToElements = () => {
    this.props.navigateTo.push("./elements");
  };
  handleLogout = () => {
    this.props.navigateTo.push("./logout");
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          className={icons.scoutsIcon}
          style={styles.mainIcon}
          onClick={this.handleNavigateToHome}
        />
        <div style={styles.label}>{translations.login.appLabel}</div>
        <div style={styles.iconsContainer}>
          <div
            className={icons.elementIcon}
            onClick={this.handleNavigateToElements}
            style={styles.icon}
          />
          <div
            className={icons.logoutIcon}
            style={styles.logoutIcon}
            onClick={this.handleLogout}
          />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
