import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display/Display';
import Button from './Controls/Button';
import Operator from './Controls/Operator';
import Dot from './Controls/Dot';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      displayVal: '0'
    };
  }

  updateDisplayHandler = value => {
    if (this.state.displayVal === '0' && value === '0') {
      return;
    } else if (this.state.displayVal === '0') {
      this.setState(prevState => {
        return { displayVal: value };
      });
      console.log('caso 1');
    } else {
      this.setState(prevState => {
        return { displayVal: prevState.displayVal + value };
      });
      console.log('caso 2');
    }
  };

  numPressHandler = value => {
    this.updateDisplayHandler(value);
  };

  dotHandler = value => {
    if (!this.state.displayVal.includes('.')) {
      this.setState(prevState => {
        return { displayVal: prevState.displayVal + '.' };
      });
    }
  };

  operatorHandler = value => {
    switch (value) {
      case 'AC':
        this.setState(prevState => {
          return { expression: '', displayVal: '0' };
        });
        break;
      case '⇤':
        this.setState(prevState => {
          return { displayVal: prevState.displayVal.slice(0, prevState.displayVal.length - 1) };
        });
        break;
      case '+':
        this.setState(prevState => {
          return {
            expression: prevState.expression + prevState.displayVal + ' + ',
            displayVal: '0'
          };
        });
        break;
      case '-':
        this.setState(prevState => {
          return {
            expression: prevState.expression + prevState.displayVal + ' - ',
            displayVal: '0'
          };
        });
        break;
      case 'x':
        this.setState(prevState => {
          return {
            expression: prevState.expression + prevState.displayVal + ' * ',
            displayVal: '0'
          };
        });
        break;
      case '÷':
        this.setState(prevState => {
          return {
            expression: prevState.expression + prevState.displayVal + ' / ',
            displayVal: '0'
          };
        });
        break;
      case '=':
        this.setState(prevState => {
          return {
            displayVal: eval(prevState.expression + ' ' + prevState.displayVal),
            expression: ''
          };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display displayVal={this.state.displayVal} />

        <Operator value="AC" click={this.operatorHandler} classes={'btn-clear'} />
        <Button value="&#8676;" click={this.operatorHandler} />
        <Operator value="&#247;" click={this.operatorHandler} classes={'btn-operator'} />

        <Button value="7" click={this.numPressHandler} />
        <Button value="8" click={this.numPressHandler} />
        <Button value="9" click={this.numPressHandler} />
        <Operator value="x" click={this.operatorHandler} classes={'btn-operator'} />

        <Button value="4" click={this.numPressHandler} />
        <Button value="5" click={this.numPressHandler} />
        <Button value="6" click={this.numPressHandler} />
        <Operator value="-" click={this.operatorHandler} classes={'btn-operator'} />

        <Button value="1" click={this.numPressHandler} />
        <Button value="2" click={this.numPressHandler} />
        <Button value="3" click={this.numPressHandler} />
        <Operator value="+" click={this.operatorHandler} classes={'btn-operator'} />

        <Button value="0" click={this.numPressHandler} classes={'btn-zero'} />
        <Dot value="." click={this.dotHandler} />
        <Operator value="=" click={this.operatorHandler} classes={'btn-equals btn-operator'} />
      </div>
    );
  }
}
