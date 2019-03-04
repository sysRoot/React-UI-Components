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
      <ActionButton styling="button" text="clear" />
      <NumberButton styling="button" type="operators" text="&#xf7;" />
      <NumberButton styling="button" weight="bold" text="7" />
      <NumberButton styling="button" weight="bold" text="8" />
      <NumberButton styling="button" weight="bold" text="9" />
      <NumberButton styling="button" type="operators" text="&#xd7;" />
      <NumberButton styling="button" weight="bold" text="4" />
      <NumberButton styling="button" weight="bold" text="5" />
      <NumberButton styling="button" weight="bold" text="6" />
      <NumberButton styling="button" type="operators" text="&#x2212;" />
      <NumberButton styling="button" weight="bold" text="1" />
      <NumberButton styling="button" weight="bold" text="2" />
      <NumberButton styling="button" weight="bold" text="3" />
      <NumberButton styling="button" type="operators" text="&#x2b;" />
      <ActionButton styling="button" weight="bold" text="0" />
      <NumberButton styling="button" type="operators" text="&#x3d;" />
    </div>
    );
  }
}
 
export default App;
