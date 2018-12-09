// Globals
import globals from "./../../config/globals";

const styles = {
  container: {
    alignItems: "center",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.16)",
    display: "flex",
    flexDirection: "row",
    height: 64,
    justifyContent: "space-between"
  },
  label: { fontFamily: globals.font, fontSize: 24 },
  icon: {
    cursor: "pointer"
  },
  iconContainer: {
    display: "flex",
    fontSize: 28,
    justifyContent: "center",
    width: 48
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 24
  },
  logoutIcon: {
    color: globals.colors.red,
    cursor: "pointer",
    fontSize: 28,
    marginLeft: 12
  },
  mainIcon: {
    cursor: "pointer",
    fontSize: 36,
    marginLeft: 24
  }
};

export default styles;
