// React
import React, { Component } from "react";
// Globals
import translations from "./../../config/translations";
// Styles
import styles from "./Elements.css";
// Components
import NavigationBar from "./../NavigationBar";
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
        <div style={styles.title}>{translations.elementsScreen.title}</div>
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
              <ElementRow
                age={element.age}
                division={element.division}
                key={index}
                name={element.name}
                patrol={element.patrol}
                progress={element.progress}
                promisse={element.promisse}
                role={element.role}
                speciality={element.speciality}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Elements;
