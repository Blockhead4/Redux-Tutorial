import React, { Component } from "react";
import { View, Text } from "react-native";
import Value from "./value";
import Control from "./control";
import { connect } from "react-redux";
import * as actions from "../actions";

class Main extends Component {
  randomizeColor = () => {
    const color = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ];

    return this.props.handleColor(color);
  };

  render() {
    const color = this.props.color;
    const style = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };

    return (
      <View style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onMinus={this.props.handleDecrement}
          onColors={this.randomizeColor}
        />
      </View>
    );
  }
}

const mapStateProps = state => {
  return {
    number: state.counter.number,
    color: state.ui.color
  };
};

const mapDispatchProps = dispatch => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleColor: color => {
      dispatch(actions.set_color(color));
    }
  };
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(Main);
