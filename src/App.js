import React, { Component } from "react";
import Userfield from "./userfield";
import Lang from "./context/language";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "english",
    };
  }

  changeLanguage = (data) => {
    this.setState({ lang: data });
  };

  render() {
    return (
      <div className="container" style={{ border: '2px solid brown', marginTop:'200px', paddingBottom:'20px'}}>
        <div className="row" >
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "15px",  
            }}
          >
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => this.changeLanguage("english")}
            >
              English
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => this.changeLanguage("french")}
            >
              French
            </button>
          </div>
        </div>

        {/* <h2>{this.state.lang}</h2> */}

        <div className="row">
          <div className="col-md-12">
            <Lang.Provider value={this.state.lang}>
              <Userfield />
            </Lang.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
