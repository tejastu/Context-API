import React, { Component } from "react";
import Button from "./button";
import Inputfield from "./inputfield";

class Userfield extends Component {
  render() {
    return (
      <React.Fragment>
        <Inputfield />
        <Button />
      </React.Fragment>
    )
  }
}

export default Userfield;
