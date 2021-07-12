import React from 'react';
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Root } from "views/pages/Root";

export const App = () => (
  <Provider store={store}>
      <Root/>
  </Provider>
);