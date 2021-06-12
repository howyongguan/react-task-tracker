import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { Component } from "react";
import AddTask from "../components/AddTask";

export default class FormDialog extends Component {
  state = {
    open: false,
  };

  handleDialog = (bool) => {
    this.setState({
      open: bool,
    });
  };

  handlePushNewTask = (name, date) => {
    this.props.handlePushNewTask(name, date);
    this.handleDialog(false);
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleDialog.bind(this, true)}
        >
          Add Tasks
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleDialog.bind(this, false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your task and date
            </DialogContentText>
            <AddTask handlePushNewTask={this.handlePushNewTask} />
          </DialogContent>
          <DialogActions>
            <Button
              style={{ margin: "0px 100px" }}
              variant="contained"
              color="secondary"
              onClick={this.handleDialog.bind(this, false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
