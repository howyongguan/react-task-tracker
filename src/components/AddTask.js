import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    taskName: "",
    taskDate: "",
  };

  handleTaskName = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleTaskDate = (e) => {
    this.setState({
      taskDate: e.target.value,
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Task Name"
          value={this.state.taskName}
          onChange={this.handleTaskName}
        />
        <TextField
          style={{ margin: "10px 0px" }}
          value={this.state.taskDate}
          onChange={this.handleTaskDate}
          label="Task Date"
        />
        <Button
          style={{ margin: "20px 0px" }}
          variant="contained"
          color="secondary"
          onClick={this.props.handlePushNewTask.bind(
            this,
            this.state.taskName,
            this.state.taskDate
          )}
        >
          ADD
        </Button>
      </div>
    );
  }
}
