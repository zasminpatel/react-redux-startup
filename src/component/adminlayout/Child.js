import React from "react";
class Child extends React.Component {
  state = {
    name: "Batman"
  };
  changeName = (newname) => {
    this.setState({
      name: newname
    });
  };
  render() {
    return <div>{this.state.name}</div>;
  }
}
export default Child;
