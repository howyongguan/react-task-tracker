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
