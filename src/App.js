import React, { Component } from "react";
import ShoppingList from "./components/ShoppingList/ShoppingList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
      </div>
    );
  }
}

export default App;
