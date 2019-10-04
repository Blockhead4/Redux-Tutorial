import * as types from "../actions/actoinTypes";

const initialState = {
  color: [255, 255, 255]
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
};

export default ui;
