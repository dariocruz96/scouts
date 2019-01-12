// React
import React from "react";
// Styles
import styles from "./DivisionRow.css";

const DivisionRow = ({ name, width }) => {
  return (
    <div style={{ ...styles.innerContainer, width: width }}>
      <div style={styles.division}>{name}</div>
    </div>
  );
};

export default DivisionRow;
