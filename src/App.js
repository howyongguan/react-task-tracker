import Card from "@material-ui/core/Card";
import React, { Component } from "react";
import AddTask from "./components/AddTask";
import FormDialog from "./components/Dialog";
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
        text: "Meeting at 7pm",
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

  handlePushNewTasks = (taskTitle, taskDate) => {
    const newStuff = {
      id: taskTitle,
      text: taskTitle,
      day: taskDate,
      reminder: true,
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
        <Header />
        <FormDialog>
          <AddTask
            onAdd={this.state.addTask}
            handlePushNewTasks={this.handlePushNewTasks}
          />
        </FormDialog>

        <Tasks tasks={this.state.tasks} />
      </Card>
    );
  }
}
