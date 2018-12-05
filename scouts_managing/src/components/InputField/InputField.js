// React
import React from "react";
// Styles
import styles from "./InputField.css";

const InputField = ({ label, onChange, onKeyPress, type }) => {
  return (
    <React.Fragment>
      <div style={styles.label}>{label}</div>
      <input
        style={styles.input}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type={type}
      />
    </React.Fragment>
  );
};

export default InputField;
