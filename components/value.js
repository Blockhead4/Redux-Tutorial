import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const propTypes = {
  number: PropTypes.number
};

const defaultProps = {
  number: -1
};

class Value extends Component {
  render() {
    return <Text>{this.props.number}</Text>;
  }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
