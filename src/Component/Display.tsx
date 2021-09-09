import React from 'react';
import "./Display.css";

interface Props {
  formula: string,
  display: string
}

export default class Display extends React.Component<Props> {
  render() {
    return (
      <div id="display-box">
        <p id="display_formula">{this.props.formula.replace(/([/*+-]+)/g, ' $1 ').replace("*", "x").replace("/", "÷")}</p>
        <p id="display">{this.props.display}</p>
      </div>
    );
  }
}
