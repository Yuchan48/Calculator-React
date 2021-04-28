import React from "react";

export default class Buttons extends React.Component {

    render() {
        return (
            <div id="buttons">
          <button onClick={this.props.allClear} id="clear">
            AC
          </button>
          <button onClick={this.props.operator} value="/" id="divide">
            /
          </button>
          <button onClick={this.props.operator} value="*" id="multiply">
            x
          </button>
          <button onClick={this.props.numbers} value="7" id="seven">
            7
          </button>
          <button onClick={this.props.numbers} value="8" id="eight">
            8
          </button>
          <button onClick={this.props.numbers} value="9" id="nine">
            9
          </button>
          <button onClick={this.props.operator} value="-" id="subtract">
            -
          </button>
          <button onClick={this.props.numbers} value="4" id="four">
            4
          </button>
          <button onClick={this.props.numbers} value="5" id="five">
            5
          </button>
          <button onClick={this.props.numbers} value="6" id="six">
            6
          </button>
          <button onClick={this.props.operator} value="+" id="add">
            +
          </button>
          <button onClick={this.props.numbers} value="1" id="one">
            1
          </button>
          <button onClick={this.props.numbers} value="2" id="two">
            2
          </button>
          <button onClick={this.props.numbers} value="3" id="three">
            3
          </button>
          <button onClick={this.props.equator} id="equals">
            =
          </button>
          <button onClick={this.props.numbers} value="0" id="zero">
            0
          </button>
          <button onClick={this.props.decimal} value="." id="decimal">
            .
          </button>
        </div>

        );
    }
}