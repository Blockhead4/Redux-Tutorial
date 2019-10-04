import React, { Component } from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";

const propTypes = {
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  onColors: PropTypes.func
};

const createWarning = funcName => {
  return () => console.warn(funcName + " is not a function ");
};

const defaultProps = {
  onPlus: createWarning("onPlus"),
  onMinus: createWarning("onMinus"),
  onColors: createWarning("onColors")
};

class Control extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button onPress={this.props.onPlus} title="Plus"></Button>
        <Button onPress={this.props.onMinus} title="Minus"></Button>
        <Button onPress={this.props.onColors} title="Colors"></Button>
      </View>
    );
  }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
