import React from "react";
import Buttons from "./Buttons";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      display: 0,
      displayForm: 0,
      prevVal: 0,
      afterCal: false,
      deci: false,
    };
  }

  allClear = () => {
    this.setState({
      formula: "",
      display: 0,
      displayForm: 0,
      prevVal: 0,
      case: 0,
      afterCal: false,
      deci: false,
    });
  };

  equator = () => {
    const input = this.state.formula;

    var result = Math.round(1000000 * eval(input.replace("--", "+"))) / 1000000;

    this.setState({
      display: result.toString(),
      formula: input + "=" + result,
      displayForm: (input + "=" + result)
        .replace(/[*]/g, "x")
        .replace(/[\/]/g, "÷"),
      prevVal: result,
      afterCal: true,
      deci: false,
    });
  };

  operator = (e) => {
    const { prevVal, formula, display, afterCal } = this.state;
    const operatorNoMinus = /[+\/*]/;

    if (afterCal === true) {
      this.setState({
        display: e.target.value.replace("*", "x").replace("/", "÷"),
        formula: prevVal + e.target.value,
        displayForm: (prevVal + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula,
        afterCal: false,
      });
    } else if (formula === "" && operatorNoMinus.test(e.target.value)) {
      this.setState({
        display: e.target.value.replace("*", "x").replace("/", "÷"),
        formula: 0 + e.target.value,
        displayForm:
          0 + e.target.value.replace(/[*]/g, "x").replace(/[\/]/g, "÷"),
        prevVal: 0,
      });
    } else if (
      /\d[+-\/*]$/.test(formula) &&
      operatorNoMinus.test(e.target.value)
    ) {
      this.setState({
        display: e.target.value.replace("*", "x").replace("/", "÷"),
        formula: formula.slice(0, -1) + e.target.value,
        displayForm: (formula.slice(0, -1) + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula.slice(0, -1),
        deci: false,
      });
    } else if (/[-]/.test(display) && /[-]/.test(e.target.value)) {
      this.setState({
        display: e.target.value.replace(/[*]/g, "x").replace(/[\/]/g, "÷"),
        prevVal: formula,
      });
    } else if (/[+\/*][-]$/.test(formula)) {
      this.setState({
        display: e.target.value.replace("*", "x").replace("/", "÷"),
        formula: formula.slice(0, -2) + e.target.value,
        displayForm: (formula.slice(0, -2) + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula.slice(0, -2),
      });
    } else {
      this.setState({
        display: e.target.value.replace("*", "x").replace("/", "÷"),
        formula: formula + e.target.value,
        displayForm: (formula + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        deci: false,
      });
    }
  };

  numbers = (e) => {
    const { display, formula, afterCal } = this.state;
    if (afterCal === true || formula === "") {
      this.setState({
        display: parseFloat(e.target.value),
        formula: e.target.value,
        displayForm: e.target.value,
        prevVal: 0,
        afterCal: false,
      });
    } else if (display === 0 && formula !== "") {
      this.setState({
        display: parseFloat(e.target.value),
        formula: formula + parseFloat(e.target.value),
        displayForm: (formula + parseFloat(e.target.value))
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: 0,
      });
    } else if (/[+-÷x]/.test(display)) {
      this.setState({
        display: parseFloat(e.target.value),
        formula: formula + e.target.value,
        displayForm: (formula + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula,
      });
    } else {
      this.setState({
        display: display + e.target.value,
        formula: formula + e.target.value,
        displayForm: (formula + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula,
      });
    }
  };

  decimal = (e) => {
    const { display, formula, deci, afterCal } = this.state;

    if (deci === true) {
      this.setState({
        prevVal: formula,
      });
    } else if (afterCal === true || formula === "") {
      this.setState({
        display: "0.",
        formula: "0.",
        displayForm: "0.",
        prevVal: 0,
        afterCal: false,
        deci: true,
      });
    } else if (/[+-\/*]/.test(display)) {
      this.setState({
        display: "0.",
        formula: formula + "0.",
        displayForm: (formula + "0.")
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula,
        deci: true,
      });
    } else {
      this.setState({
        display: display + e.target.value,
        formula: formula + e.target.value,
        displayForm: (formula + e.target.value)
          .replace(/[*]/g, "x")
          .replace(/[\/]/g, "÷"),
        prevVal: formula,
        deci: true,
      });
    }
  };

  render() {
    return (
      <div id="calculator">
        <div id="display-box">
          <p id="parasite">{this.state.displayForm}</p>
          <p id="display">{this.state.display}</p>
        </div>
        <Buttons
          decimal={this.decimal}
          equator={this.equator}
          allClear={this.allClear}
          numbers={this.numbers}
          operator={this.operator}
        />
      </div>
    );
  }
}
