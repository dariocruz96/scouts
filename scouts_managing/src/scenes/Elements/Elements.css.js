// Globals
import globals from "./../../config/globals";

const styles = {
  element: {
    alignItems: "center",
    alignText: "center",
    borderRight: `1px solid ${globals.colors.black}`,
    display: "flex",
    flexDirection: "row",
    fontFamily: globals.font,
    height: 30,
    justifyContent: "center",
    width: "100%"
  },
  mainContainer: {
    border: `1px solid ${globals.colors.black}`,
    display: "flex",
    fontFamily: globals.font,
    height: 30,
    justifyContent: "space-between",
    width: "100%"
  },
  superContainer: {
    padding: 32
  },
  title: {
    fontFamily: globals.font,
    fontSize: 36,
    paddingLeft: 32,
    paddingTop: 32
  }
};

export default styles;
