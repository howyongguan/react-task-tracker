import Card from "@material-ui/core/Card";
import React, { Component } from "react";
import AddTask from "./components/AddTask";
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

  //Add Task
  addTask = (task) => {
    console.log(task);
  };

  //delete task

  deleteTask = (id) => {
    console.log("delete", id);
  };

  render() {
    return (
      <Card className="container">
        {<Header />}
        <AddTask
          onAdd={this.state.addTask}
          handlePushNewTasks={this.handlePushNewTasks}
        />
        <Tasks tasks={this.state.tasks} onDelete={this.state.deleteTask} />

        {/* <Tasks tasks={this.state.tasks} /> */}
      </Card>
    );
  }
}
