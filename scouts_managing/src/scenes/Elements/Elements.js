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
        occupation: "Guia",
        patrol: "Lobo",
        progress: "1ª Etapa",
        promisse: "12/02/2014",
        speciality: "Nenhuma"
      },
      {
        age: "22",
        division: "Caminheiros",
        name: "Dário",
        occupation: "Sub-Guia",
        patrol: "Lobo",
        progress: "2ª Etapa",
        promisse: "11/06/2016",
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
            occupation={"Cargo de Patrulha"}
            patrol={"Patrulha"}
            progress={"Progresso Escotista"}
            promisse={"Promessa"}
            speciality={"Especialidades"}
          />
          {Elements.map((element, index) => {
            return (
              <ElementRow
                age={element.age}
                division={element.division}
                key={index}
                name={element.name}
                occupation={element.occupation}
                patrol={element.patrol}
                progress={element.progress}
                promisse={element.promisse}
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
