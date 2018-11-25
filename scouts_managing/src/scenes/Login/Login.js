// React
import React, { Component } from "react";
// Styles
import styles from "./Login.css";

// Uma class é um componente que tem um estado
// Uma const é um componente sem estado
class Login extends Component {
  // Estado do componente
  constructor(props) {
    super(props);
    // Propriedades do estado
    this.state = { email: "", password: "", loginSuccessful: false };
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
      this.setState({ loginSuccessful: true });
    }
  };
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.errorMessageContainer}>
          <div style={styles.errorMessage}>
            The email or the password is incorrect.
          </div>
          <div>X</div>
        </div>
        <div style={styles.loginForm}>
          <div style={styles.header}>
            <div style={styles.headerTitle}>AEP 197 QUELFES</div>
          </div>
          <div style={styles.body}>
            <div>Email</div>
            <input style={styles.input} onChange={this.handleEmailChange} />
            <div style={styles.password}>Password</div>
            <input
              style={styles.input}
              type="password"
              onChange={this.handlePasswordChange}
            />
            <button
              style={styles.button}
              type="submit"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
