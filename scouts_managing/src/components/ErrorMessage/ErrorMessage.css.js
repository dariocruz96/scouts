// Globals
import globals from "./../../config/globals";

const styles = {
  closeIcon: {
    cursor: "pointer",
    paddingLeft: 18,
    paddingTop: 2
  },
  errorMessage: {
    fontFamily: globals.font,
    fontSize: 14,
    paddingLeft: 39,
    paddingRight: 14
  },
  errorMessageContainer: {
    alignItems: "center",
    backgroundColor: globals.colors.errorRed,
    borderRadius: 4,
    color: globals.colors.white,
    display: "flex",
    height: 50,
    marginBottom: 18,
    visibility: "hidden",
    width: 300
  }
};

export default styles;
