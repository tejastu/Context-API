import React, { Component } from "react";
import Lang from "./context/language";

class Button extends Component {
  static contextType = Lang;

  render() {
    // console.log(this.context);

    const text = this.context === "english" ? "submit" : "soumettre";
    return (
      <React.Fragment>
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary btn-lg btn-block"
        >
          {text}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
