import React, { Component } from "react";
import Routers from "./Routers";
import "./styles.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routers />
        </header>
      </div>
    );
  }
}
export default App;
