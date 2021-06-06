import Card from "@material-ui/core/Card";
import React, { Component } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "Doctor Appointment",
        day: "Feb 5th at 2.30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at 6pm",
        day: "Feb 6th at 1.30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping ",
        day: "Feb 5th at 11.30pm",
        reminder: true,
      },
    ],
  };

  handlePushNewTasks = (index) => {
    const newStuff = {
      id: 5,
      text: `New Tasks ${index}`,
      day: "Feb 5th at 11.30pm",
      reminder: false,
    };

    const newTaskList = this.state.tasks;
    newTaskList.push(newStuff);

    this.setState({
      tasks: newTaskList,
    });
  };

  render() {
    return (
      <Card className="container">
        <Header handlePushNewTasks={this.handlePushNewTasks} />
        <Tasks listItem={this.state.tasks} />
      </Card>
    );
  }
}
