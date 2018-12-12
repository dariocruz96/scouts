// React
import React, { Component } from "react";
// Components
import NavigationBar from "./../NavigationBar";
// Styles
import styles from "./Elements.css";
import ElementRow from "../../scenes/Elements/components/ElementRow";

class Elements extends Component {
  listOfElements = () => {
    const elements = [
      {
        age: "23",
        division: "Caminheiros",
        name: "Tiago",
        patrol: "Lobo",
        progress: "1ª Etapa",
        promisse: "12/2/2014",
        role: "Guia",
        speciality: "Nenhuma"
      },
      {
        age: "22",
        division: "Caminheiros",
        name: "Dário",
        patrol: "Lobo",
        progress: "2ª Etapa",
        promisse: "11/6/2016",
        role: "Sub-Guia",
        speciality: "Nenhuma"
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
          <ElementRow
            age={"Idade"}
            division={"Divisão"}
            name={"Nome"}
            patrol={"Patrulha"}
            progress={"Progresso Escotista"}
            promisse={"Promessa"}
            role={"Cargo de Patrulha"}
            speciality={"Especialidades"}
          />
          {Elements.map((element, index) => {
            return (
              <div style={styles.innerContainer}>
                <div style={styles.element}>{element.name}</div>
                <div style={styles.element}>{element.age}</div>
                <div style={styles.element}>{element.division}</div>
                <div style={styles.element}>{element.patrol}</div>
                <div style={styles.element}>{element.role}</div>
                <div style={styles.element}>{element.progress}</div>
                <div style={styles.element}>{element.speciality}</div>
                <div style={styles.element}>{element.promisse}</div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Elements;
