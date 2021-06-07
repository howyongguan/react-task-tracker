import React, { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  render() {
    return (
      <>
        {this.props.tasks.map((task) => (
          //   <Typography variant="body2" key={task.id}>{task.text}
          //   </Typography>
          <Task key={task.id} task={task} />
          //<task key={task.id} task={task}/>
        ))}
      </>
    );
  }
}
