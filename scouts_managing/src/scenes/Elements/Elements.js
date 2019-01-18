// React
import React, { Component } from "react";
// Globals
import translations from "./../../config/translations";
// Styles
import styles from "./Elements.css";
// Components
import AddForm from "./components/AddForm";
import ElementRow from "../../scenes/Elements/components/ElementRow";
import NavigationBar from "./../NavigationBar";

class Elements extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormOpen: false };
  }

  handleClickOpenForm = () => {
    this.setState({ isFormOpen: true });
  };
  handleClickCloseForm = () => {
    this.setState({ isFormOpen: false });
  };

  elementLabels = () => {
    const labels = [
      translations.elementsScreen.age,
      translations.elementsScreen.division,
      translations.elementsScreen.name,
      translations.elementsScreen.occupation,
      translations.elementsScreen.patrol,
      translations.elementsScreen.progress,
      translations.elementsScreen.speciality,
      translations.elementsScreen.promisse
    ];
    return labels;
  };
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
    const Labels = this.elementLabels();
    return (
      <React.Fragment>
        <NavigationBar navigateTo={this.props.history} />
        <div style={styles.title}>{translations.elementsScreen.title}</div>
        <div style={styles.mainContainer}>
          <ElementRow
            age={translations.elementsScreen.age}
            division={translations.elementsScreen.division}
            name={translations.elementsScreen.name}
            occupation={translations.elementsScreen.occupation}
            patrol={translations.elementsScreen.patrol}
            progress={translations.elementsScreen.progress}
            promisse={translations.elementsScreen.promisse}
            speciality={translations.elementsScreen.speciality}
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
        <button onClick={this.handleClickOpenForm} style={styles.addButton}>
          {translations.elementsScreen.add}
        </button>
        <AddForm
          closeForm={this.handleClickCloseForm}
          isFormOpen={this.state.isFormOpen}
          labels={Labels}
        />
      </React.Fragment>
    );
  }
}
export default Elements;
