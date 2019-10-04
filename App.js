import React from "react";
import Main from "./components/main";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
