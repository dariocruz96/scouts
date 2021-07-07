// React
import React from "react";
// Styles
import styles from "./AddFormRow.css";

const AddFormRow = ({ label }) => {
  return (
    <React.Fragment>
      <div>{label}</div>
      <input style={styles.inputField} />
    </React.Fragment>
  );
};

export default AddFormRow;
