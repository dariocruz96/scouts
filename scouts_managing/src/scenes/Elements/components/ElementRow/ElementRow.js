// React
import React from "react";
// Styles
import styles from "./ElementRow.css";

const ElementRow = ({
  age,
  division,
  name,
  occupation,
  patrol,
  progress,
  promisse,
  speciality
}) => {
  return (
    <div style={styles.innerContainer}>
      <div style={styles.element}>{name}</div>
      <div style={styles.element}>{age}</div>
      <div style={styles.element}>{division}</div>
      <div style={styles.element}>{patrol}</div>
      <div style={styles.element}>{occupation}</div>
      <div style={styles.element}>{progress}</div>
      <div style={styles.element}>{speciality}</div>
      <div style={styles.element}>{promisse}</div>
    </div>
  );
};

export default ElementRow;
