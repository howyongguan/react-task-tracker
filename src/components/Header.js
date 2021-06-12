import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Typography variant="h4" gutterBottom>
          {this.props.title}
        </Typography>
        {/* <Button
          variant="contained"
          color="secondary"
          onClick={this.props.handlePushNewTasks}
        >
          Add task
        </Button> */}
      </header>
    );
  }
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle={
//     color: 'red',
//     backgroundColor:'black'}
