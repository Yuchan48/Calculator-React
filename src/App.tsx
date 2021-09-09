import React from 'react';

import Buttons from "./Component/Buttons";
import Display from "./Component/Display";

import { logics } from './Component/functions/logics';

export interface MainState {
  keyPressed: string,
  formula: string,
  display: string,
  afterCal: boolean,
  leadingZero: boolean,
  decimalPoint: boolean
}

export default class App extends React.Component {
  state: MainState = {
    keyPressed: "",
    formula: "",
    display: "0",
    afterCal: false,
    leadingZero: false,
    decimalPoint: false
  };

  handleClick = (btnName: string) => {
    this.setState(logics(this.state, btnName))
  }


  render() {
    return (
      <div id="calculator">
        <Display formula={this.state.formula} display={this.state.display} />
        <Buttons keyPressed={this.handleClick} />
      </div>
    );
  }
}