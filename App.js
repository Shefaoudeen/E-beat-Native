import * as React from "react";
import Screens from "./Screens";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});
const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
