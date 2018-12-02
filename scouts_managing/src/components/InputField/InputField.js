// React
import React from "react";
// Styles
import styles from "./InputField.css";

const InputField = ({ label, onChange, type }) => {
  return (
    <React.Fragment>
      <div style={styles.label}>{label}</div>
      <input style={styles.input} onChange={onChange} type={type} />
    </React.Fragment>
  );
};

export default InputField;
