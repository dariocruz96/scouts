// React
import React, { Component } from "react";
// Globals
import icons from "./../../config/icons";
import translations from "./../../config/translations";
// Styles
import styles from "./NavigationBar.css";
// Components
import Tooltip from "react-simple-tooltip";

class NavigationBar extends Component {
  handleLogout = () => {
    this.props.navigateTo.push("/login");
  };
  handleNavigateToBookletProof = () => {
    this.props.navigateTo.push("/bookletproof");
  };
  handleNavigateToDivisions = () => {
    this.props.navigateTo.push("/divisions");
  };
  handleNavigateToElements = () => {
    this.props.navigateTo.push("/elements");
  };
  handleNavigateToHome = () => {
    this.props.navigateTo.push("/home");
  };
  handleNavigateToScoutsCalendar = () => {
    this.props.navigateTo.push("/scoutscalendar");
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          className={icons.scoutsIcon}
          style={styles.mainIcon}
          onClick={this.handleNavigateToHome}
        />
        <div style={styles.iconsContainer}>
          <div style={styles.iconContainer}>
            <Tooltip
              border="none"
              content={translations.iconTooltips.divisions}
              fontFamily="Tahoma"
              fontSize="12px"
              padding={4}
              placement="bottom"
              radius={3}
            >
              <div
                className={icons.divisionIcon}
                onClick={this.handleNavigateToDivisions}
                style={styles.icon}
              />
            </Tooltip>
          </div>
          <div style={styles.iconContainer}>
            <Tooltip
              border="none"
              content={translations.iconTooltips.proofBooklet}
              fontFamily="Tahoma"
              fontSize="12px"
              padding={4}
              placement="bottom"
              radius={3}
            >
              <div
                className={icons.proofIcon}
                onClick={this.handleNavigateToBookletProof}
                style={styles.icon}
              />
            </Tooltip>
          </div>
          <div style={styles.iconContainer}>
            <Tooltip
              border="none"
              content={translations.iconTooltips.scoutsCalendar}
              fontFamily="Tahoma"
              fontSize="12px"
              padding={4}
              placement="bottom"
              radius={3}
            >
              <div
                className={icons.calendarIcon}
                onClick={this.handleNavigateToScoutsCalendar}
                style={styles.icon}
              />
            </Tooltip>
          </div>
          <div style={styles.iconContainer}>
            <Tooltip
              border="none"
              content={translations.iconTooltips.elementsManage}
              fontFamily="Tahoma"
              fontSize="12px"
              padding={4}
              placement="bottom"
              radius={3}
            >
              <div
                className={icons.elementIcon}
                onClick={this.handleNavigateToElements}
                style={styles.icon}
              />
            </Tooltip>
          </div>
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
