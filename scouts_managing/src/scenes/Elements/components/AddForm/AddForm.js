// React
import React from "react";
// Styles
import styles from "./AddForm.css";
// Globals
import translations from "../../../../config/translations";
// Components
import AddFormRow from "./components/AddFormRow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const AddForm = ({ closeForm, isFormOpen, labels }) => {
  return (
    <Dialog onClose={closeForm} open={isFormOpen}>
      <DialogTitle style={styles.dialogTitle}>
        {translations.elementsScreen.addElement}
      </DialogTitle>
      <DialogContent style={styles.dialogContent}>
        <div style={styles.addContainer}>
          {labels.map((label, index) => {
            return <AddFormRow key={index} label={label} />;
          })}
        </div>
      </DialogContent>
      <DialogActions style={styles.dialogActions}>
        <button onClick={closeForm}>
          {translations.elementsScreen.cancel}
        </button>
        <button onClick={closeForm}>{translations.elementsScreen.add}</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddForm;
