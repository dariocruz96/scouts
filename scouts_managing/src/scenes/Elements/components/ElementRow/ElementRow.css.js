// Globals
import globals from "./../../../../config/globals";

const styles = {
  element: {
    alignItems: "center",
    alignText: "center",
    display: "flex",
    flexDirection: "row",
    fontFamily: globals.font,
    justifyContent: "center",
    width: "100%"
  },
  innerContainer: {
    border: `1px solid ${globals.colors.black}`,
    borderRadius: 8,
    display: "flex",
    fontFamily: globals.font,
    height: 48,
    justifyContent: "space-between",
    marginBottom: 12,
    width: "100%"
  }
};

export default styles;
