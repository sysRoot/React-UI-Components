import React, {Component} from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcDisp: 0,
    }
  }

  onClickButton() {

  }

  render() { 
    return (
      <div className="container">
      <CalculatorDisplay display={this.state.calcDisp}/>
      <ActionButton styling="button-action" text="clear" onClick="" />
      <NumberButton styling="button-number" type="operators" text="&#xf7;" onClick="" />
      <NumberButton styling="button-number" weight="bold" text="7" onClick="" />
      <NumberButton styling="button-number" weight="bold" text="8" onClick=""/>
      <NumberButton styling="button-number" weight="bold" text="9" />
      <NumberButton styling="button-number" type="operators" text="&#xd7;" />
      <NumberButton styling="button-number" weight="bold" text="4" />
      <NumberButton styling="button-number" weight="bold" text="5" />
      <NumberButton styling="button-number" weight="bold" text="6" />
      <NumberButton styling="button-number" type="operators" text="&#x2212;" />
      <NumberButton styling="button-number" weight="bold" text="1" />
      <NumberButton styling="button-number" weight="bold" text="2" />
      <NumberButton styling="button-number" weight="bold" text="3" />
      <NumberButton styling="button-number" type="operators" text="&#x2b;" />
      <ActionButton styling="button-action" weight="bold" text="0" />
      <NumberButton styling="button-number" type="operators" text="&#x3d;" />
    </div>
    );
  }
}
 
export default App;
