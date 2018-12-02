const styles = {
  body: {
    fontFamily: "Comic Sans MS",
    fontSize: 17,
    paddingBottom: 24,
    paddingLeft: 39,
    paddingTop: 24
  },
  header: {
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #f7e332, #1f8436, #0b77c7)",
    borderBottom: "1px solid black",
    display: "flex",
    height: 100,
    paddingLeft: 39
  },
  headerTitle: {
    color: "white",
    fontFamily: "Tahoma",
    fontSize: 28
  },
  hidden: {
    display: "none"
  },
  loginForm: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: 4,
    height: 324,
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
    opacity: 0.8,
    width: "100%"
  },
  passwordContainer: {
    marginBottom: 5,
    paddingTop: 19
  }
};
export default styles;
