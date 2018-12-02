// React
import React, { Component } from "react";
// Styles
import styles from "./Login.css";
// Component
import Button from "../../components/Button/Button";
import ErrorMessage from "./../../components/ErrorMessage";
import InputField from "../../components/InputField/InputField";

// Uma class é um componente que tem um estado
// Uma const é um componente sem estado
class Login extends Component {
  // Estado do componente
  constructor(props) {
    super(props);
    // Propriedades do estado
    this.state = {
      email: "",
      isErrorShow: false,
      loginSuccessful: false,
      password: ""
    };
  }

  // Função que recebe o argumento event
  handleEmailChange = event => {
    const value = event.target.value;
    // Metodo para atualizar o estado
    this.setState({ email: value });
  };
  handlePasswordChange = event => {
    const value = event.target.value;
    this.setState({ password: value });
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    if (email === "aep197@escoteiros.pt" && password === "escoteiros") {
      this.setState({ loginSuccessful: true, isErrorShow: false });
    } else {
      this.setState({ isErrorShow: true });
    }
  };
  handleErrorMessage = () => {
    this.setState({ isErrorShow: false });
  };
  render() {
    const { isErrorShow } = this.state;
    return (
      <div style={styles.mainContainer}>
        <ErrorMessage
          closeErrorMessage={this.handleErrorMessage}
          isVisible={isErrorShow}
          message="Email ou password incorretos."
        />
        <div style={styles.loginForm}>
          <div style={styles.header}>
            <div style={styles.headerTitle}>AEP 197 QUELFES</div>
          </div>
          <div style={styles.body}>
            <InputField label="Email" onChange={this.handleEmailChange} />
            <div style={styles.passwordContainer}>
              <InputField
                label="Password"
                onChange={this.handlePasswordChange}
                type="password"
              />
            </div>
            <Button label="Login" onClick={this.handleSubmit} type="submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
