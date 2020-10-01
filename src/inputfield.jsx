import React, { Component } from "react";
import Lang from "./context/language";

class Inputfield extends Component {
  static contextType = Lang;

  render() {
    const label = this.context === "english" ? "Name" : "Nom";

    const subject = this.context === "english" ? "Subject" : "matière";
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="username">{label}</label>
          <input
            type="text"
            className="form-control"
            placeholder={
              this.context === "english" //this.context
                ? "enter username"
                : "Saisissez votre nom d utilisateur"
            }
          />

          <label htmlFor="username">{subject}</label>
          <input
            type="text"
            className="form-control"
            placeholder={
              this.context === "english" //this.context
                ? "enter subject"
                : "entrer le sujet"
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Inputfield;
