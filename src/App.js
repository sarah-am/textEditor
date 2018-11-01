import React, { Component } from "react";
import "./App.css";
import StyleButton from "./StyleButton";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false,
      italic: false,
      underline: false,
      color: "black"
    };

    this.stylings = ["bold", "italic", "underline"];
    this.colors = ["yellow", "blue", "red", "black", "purple"];

    this.setStyle = this.setStyle.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  setStyle(style) {
    const newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  }

  chooseColor(color) {
    this.setState({ color: color });
  }

  render() {
    let stylingBoxes = this.stylings.map(style => {
      return (
        <button
          className={this.state[style] ? "btn btn-primary" : "btn btn-light"}
          style={styles[style]}
          key={style}
          onClick={() => this.setStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = this.colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.chooseColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
