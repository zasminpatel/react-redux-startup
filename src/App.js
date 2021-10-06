import React, { Component } from "react";
import "./styles.css";
import Routers from "./Routers";
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
