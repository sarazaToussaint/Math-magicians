import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleOnclickEvent = this.handleOnclickEvent.bind(this);
  }

  handleOnclickEvent(e) {
    this.setState((state) => calculate(state, e.target.id));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="show-result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>

        <div className="row-one grid">
          <button type="button" onClick={this.handleOnclickEvent} id="AC" className="btn">Ac</button>
          <button type="button" onClick={this.handleOnclickEvent} id="+/-" className="btn">+/-</button>
          <button type="button" onClick={this.handleOnclickEvent} id="%" className="btn">%</button>
          <button type="button" onClick={this.handleOnclickEvent} id="÷" className="btn">÷</button>
        </div>
        <div className="row-two grid">
          <button type="button" onClick={this.handleOnclickEvent} id="7" className="btn">7</button>
          <button type="button" onClick={this.handleOnclickEvent} id="8" className="btn">8</button>
          <button type="button" onClick={this.handleOnclickEvent} id="9" className="btn">9</button>
          <button type="button" onClick={this.handleOnclickEvent} id="x" className="btn">x</button>
        </div>
        <div className="row-three grid">
          <button type="button" onClick={this.handleOnclickEvent} id="4" className="btn">4</button>
          <button type="button" onClick={this.handleOnclickEvent} id="5" className="btn">5</button>
          <button type="button" onClick={this.handleOnclickEvent} id="6" className="btn">6</button>
          <button type="button" onClick={this.handleOnclickEvent} id="-" className="btn">-</button>
        </div>
        <div className="row-four grid">
          <button type="button" onClick={this.handleOnclickEvent} id="1" className="btn">1</button>
          <button type="button" onClick={this.handleOnclickEvent} id="2" className="btn">2</button>
          <button type="button" onClick={this.handleOnclickEvent} id="3" className="btn">3</button>
          <button type="button" onClick={this.handleOnclickEvent} id="+" className="btn">+</button>
        </div>
        <div className="row-five grid">
          <button type="button" onClick={this.handleOnclickEvent} id="0" className="btn">0</button>
          <button type="button" onClick={this.handleOnclickEvent} id="." className="btn">.</button>
          <button type="button" onClick={this.handleOnclickEvent} id="=" className="btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
