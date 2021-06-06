// import Button from "./Button";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Typography variant="h4">Task Records</Typography>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </header>
    );
  }
}
