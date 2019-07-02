import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import MainNavigator from "./navigator";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
