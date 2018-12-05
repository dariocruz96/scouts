// React
import React from "react";
// Styles
import styles from "./Button.css";

const Button = ({ label, onClick, type }) => {
  return (
    <button style={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
