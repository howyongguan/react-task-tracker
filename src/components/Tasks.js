import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    return (
      <>
        {this.props.listItem.map((task) => (
          <Typography variant="body1" key={task.id}>
            {task.text}
          </Typography>
        ))}
      </>
    );
  }
}
