import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "./AddForm.css";

export default class FormDialog extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          + Add
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Adicionar Elemento</DialogTitle>
          <DialogContent>
            <div style={styles.addContainer}>
              <div>Nome:</div>
              <input style={styles.inputField} />
              <div>Idade:</div>
              <input style={styles.inputField} />
              <div>Divisão:</div>
              <input style={styles.inputField} />
              <div>Patrulha:</div>
              <input style={styles.inputField} />
              <div>Cargo de Patrulha:</div>
              <input style={styles.inputField} />
              <div>Progresso Escotista:</div>
              <input style={styles.inputField} />
              <div>Especialidades:</div>
              <input style={styles.inputField} />
              <div>Promessa:</div>
              <input style={styles.inputField} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Confirmar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
