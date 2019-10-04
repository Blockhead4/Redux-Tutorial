import React, { Component } from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";

import * as types from "./actoinTypes";

export const increment = () => {
  return {
    type: types.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};

export const set_color = color => {
  return {
    type: types.SET_COLOR,
    color: color
  };
};
