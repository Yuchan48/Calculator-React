import React from "react";
import "./Buttons.css";

interface Props {
  keyPressed: any
}

interface Obj {
  value: string,
  id: string,
  show: string
}

export default class Buttons extends React.Component<Props> {

  clickHandler = (e: { preventDefault: () => void; currentTarget: { value?: string; }; }) => {
    e.preventDefault();
    this.props.keyPressed(e.currentTarget.value)
  }

  buttonElements = () => {
    const obj: Obj[] = [
      { value: "AC", id: "clear", show: "AC" },
      { value: "/", id: "divide", show: "÷" },
      { value: "*", id: "multiply", show: "x" },
      { value: "7", id: "seven", show: "7" },
      { value: "8", id: "eight", show: "8" },
      { value: "9", id: "nine", show: "9" },
      { value: "-", id: "subtract", show: "-" },
      { value: "4", id: "four", show: "4" },
      { value: "5", id: "five", show: "5" },
      { value: "6", id: "six", show: "6" },
      { value: "+", id: "add", show: "+" },
      { value: "1", id: "one", show: "1" },
      { value: "2", id: "two", show: "2" },
      { value: "3", id: "three", show: "3" },
      { value: "=", id: "equals", show: "=" },
      { value: "0", id: "zero", show: "0" },
      { value: ".", id: "decimal", show: "." },
    ];

    return (
      obj.map(item =>
        <button onClick={this.clickHandler} value={item.value} id={item.id} key={item.id}>{item.show}</button>
      )
    )
  }

  render() {
    return (
      <div id="buttons">
        {this.buttonElements()}
      </div>
    );
  }
}