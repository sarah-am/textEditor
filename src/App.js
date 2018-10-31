import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      bold: false,
      italic: false,
      underline: false
    };

    this.stylings = ["bold", "italic", "underline"];
    this.colors = ["yellow", "blue", "red", "black", "purple"];

    this.setStyle = this.setStyle.bind(this);
  }

  setStyle(style) {
    this.setState(prevState => ({ [style]: !prevState[style] }));
  }

  setColor(color) {
    this.setState({ color });
  }

  getStyle() {
    let style = {
      color: this.state.color
    };

    if (this.state.bold) style = { ...style, ...styles.bold };
    if (this.state.italic) style = { ...style, ...styles.italic };
    if (this.state.underline) style = { ...style, ...styles.underline };

    return style;
  }

  render() {
    let stylingBoxes = this.stylings.map(style => {
      return (
        <button
          className={`btn ${this.state[style] && "btn-primary"}`}
          onClick={() => this.setStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = this.colors.map(color => {
      return (
        <button
          onClick={() => this.setColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea style={this.getStyle()} />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
