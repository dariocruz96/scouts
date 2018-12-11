// React
import React, { Component } from "react";
// Components
import NavigationBar from "./../NavigationBar";
// Styles
import styles from "./Elements.css";

const Elements = props => {
  return (
    <React.Fragment>
      <NavigationBar navigateTo={props.history} />
      <div style={styles.title}>Elementos</div>
      <div style={styles.superContainer}>
        <div style={styles.mainContainer}>
          <div style={styles.element}>Nome</div>
          <div style={styles.element}>Idade</div>
          <div style={styles.element}>Patrulha</div>
          <div style={styles.element}>Cargo de Patrulha</div>
          <div style={styles.element}>etc</div>
          <div style={styles.element}>etc</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Elements;
