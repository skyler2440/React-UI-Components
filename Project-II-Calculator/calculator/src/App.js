import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="text" text="clear" />
          <NumberButton bgColor="btn-fnct" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="btn-num" text="7" />
          <NumberButton bgColor="btn-num" text="8" />
          <NumberButton bgColor="btn-num" text="9" />
          <NumberButton bgColor="btn-fnct" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="btn-num" text="4" />
          <NumberButton bgColor="btn-num" text="5" />
          <NumberButton bgColor="btn-num" text="6" />
          <NumberButton bgColor="btn-fnct" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="btn-num" text="1" />
          <NumberButton bgColor="btn-num" text="2" />
          <NumberButton bgColor="btn-num" text="3" />
          <NumberButton bgColor="btn-fnct" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="text" text="0" />
          <NumberButton bgColor="btn-fnct" text="=" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;