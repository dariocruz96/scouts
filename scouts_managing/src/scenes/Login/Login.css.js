const styles = {
  body: { paddingLeft: 39, paddingTop: 24 },
  button: {
    height: 30,
    marginLeft: 175,
    marginTop: 24,
    width: 52
  },
  errorMessage: {
    paddingLeft: 14,
    paddingRight: 14
  },
  errorMessageContainer: {
    alignItems: "center",
    backgroundColor: "#cc0000",
    border: "1px solid black",
    borderRadius: 4,
    color: "white",
    display: "flex",
    height: 50,
    marginBottom: 20,
    width: 300
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
  input: {
    width: 220
  },
  loginForm: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: 4,
    height: 300,
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
  password: {
    paddingTop: 24
  }
};

export default styles;
