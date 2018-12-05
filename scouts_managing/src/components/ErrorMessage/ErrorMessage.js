// React
import React from "react";
// Styles
import styles from "./ErrorMessage.css";

const ErrorMessage = ({ message, closeErrorMessage, isVisible }) => {
  return (
    <div
      style={{
        ...styles.errorMessageContainer,
        ...(isVisible && { visibility: "visible" })
      }}
    >
      <div style={styles.errorMessage}>{message}</div>
      <div
        style={styles.closeIcon}
        onClick={closeErrorMessage}
        className={"icon-ic_close"}
      />
    </div>
  );
};

export default ErrorMessage;
