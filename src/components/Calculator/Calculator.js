import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display/Display';
import Button from './Button/Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: '0'
    };
  }
  render() {
    return (
      <div className="calculator">
        <Display displayVal={this.state.displayVal} />

        <Button classes={'btn-clear'}>AC</Button>
        <Button>&#8676;</Button>
        <Button classes={'btn-operator'}>&#247;</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button classes={'btn-operator'}>x</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button classes={'btn-operator'}>-</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button classes={'btn-operator'}>+</Button>

        <Button classes={'btn-zero'}>0</Button>
        <Button>.</Button>
        <Button classes={'btn-equals btn-operator'}>=</Button>
      </div>
    );
  }
}
