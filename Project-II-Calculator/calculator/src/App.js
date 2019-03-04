import React, { Component } from "react";
import update from "immutability-helper";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: []
    };
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      this.setState({
        operations: [result],
      })
    }
  }

  onClickButton = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case '=':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  };

  keyPress = e => {
    const value = e.key;

    const allowed = [
      '1', '2', '3', '4',
      '5', '6', '7', '8',
      '9', '0', '+', '-', '*', '/', '=', '.',
      'Enter', 'equal', 'Escape', 'C',
      'Backspace'
    ];

    if (allowed.includes(value)) {
      switch (value) {
        case 'Escape':
          this.setState({
            operations: [],
          })
          break
        case 'Backspace':
          const backSpaceOperations = this.state.operations;
          backSpaceOperations.pop()
          this.setState({
            operations: backSpaceOperations,
          })
          break
        case '=':
        case 'Enter':
          this.calculateOperations()
          break
        default:
          const newOperations = update(this.state.operations, {
            $push: [value],
          })
          this.setState({
            operations: newOperations,
          })
          break
      }
    }
  }

  componentWillMount = (e) => {
    document.addEventListener("keydown", this.keyPress.bind(this));
  }

  render() {
    return (
      <div className="container">
        <CalculatorDisplay display={this.state.operations} />
        <ActionButton
          styling="button-action"
          text="clear"
          clicker={this.onClickButton}
          kpress={this.keyPress}
        />
        <NumberButton
          styling="button-number"
          type="operators"
          text="&#47;"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="7"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="8"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="9"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          type="operators"
          text="&#42;"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="4"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="5"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="6"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          type="operators"
          text="&#x2212;"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="1"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="2"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          weight="bold"
          text="3"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          type="operators"
          text="&#x2b;"
          clicker={this.onClickButton}
        />
        <ActionButton
          styling="button-action"
          weight="bold"
          text="0"
          clicker={this.onClickButton}
        />
        <NumberButton
          styling="button-number"
          type="operators"
          text="&#x3d;"
          clicker={this.onClickButton}
        />
      </div>
    );
  }
}

export default App;
