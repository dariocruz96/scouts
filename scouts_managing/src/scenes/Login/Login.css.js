// Globals
import globals from "./../../config/globals";

const styles = {
  body: {
    fontFamily: globals.font,
    fontSize: 17,
    paddingBottom: 24,
    paddingLeft: 39,
    paddingTop: 24
  },
  header: {
    alignItems: "center",
    background: globals.colors.gradient,
    borderBottom: `1px solid ${globals.colors.black}`,
    borderRadius: "4px 4px 0px 0px",
    display: "flex",
    height: 100,
    paddingLeft: 39
  },
  headerTitle: {
    color: globals.colors.white,
    fontFamily: globals.font,
    fontSize: 28
  },
  hidden: {
    display: "none"
  },
  loginForm: {
    backgroundColor: globals.colors.white,
    borderRadius: 4,
    height: 330,
    width: 300
  },
  mainContainer: {
    alignItems: "center",
    backgroundImage: `url(${require("./../../images/image_1.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "100%"
  },
  passwordContainer: {
    marginBottom: 5,
    paddingTop: 19
  }
};
export default styles;
