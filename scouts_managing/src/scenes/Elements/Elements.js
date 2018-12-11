// React
import React, { Component } from "react";
// Components
import NavigationBar from "./../NavigationBar";
// Styles
import styles from "./Elements.css";

class Elements extends Component {
  listOfElements = () => {
    const elements = [
      {
        name: "Tiago",
        age: "23",
        patrol: "Lobos",
        role: "Lobo Mau"
      },
      {
        name: "Dário",
        age: "22",
        patrol: "Lobos",
        role: "Capuchinho Vermelho"
      }
    ];
    return elements;
  };
  render() {
    const Elements = this.listOfElements();
    return (
      <React.Fragment>
        <NavigationBar navigateTo={this.props.history} />
        <div style={styles.title}>Elementos</div>
        <div style={styles.mainContainer}>
          <div style={styles.innerContainer}>
            <div style={styles.element}>Nome</div>
            <div style={styles.element}>Idade</div>
            <div style={styles.element}>Patrulha</div>
            <div style={styles.element}>Cargo de Patrulha</div>
          </div>
          {Elements.map((element, index) => {
            return (
              <div style={styles.innerContainer}>
                <div style={styles.element}>{element.name}</div>
                <div style={styles.element}>{element.age}</div>
                <div style={styles.element}>{element.patrol}</div>
                <div style={styles.element}>{element.role}</div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Elements;
