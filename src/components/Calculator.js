import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display-result">0</div>
        <div className="row-one grid">
          <button type="button" className="btn">Ac</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn">/</button>
        </div>
        <div className="row-two grid">
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn">*</button>
        </div>
        <div className="row-three grid">
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn">-</button>
        </div>
        <div className="row-four grid">
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn">+</button>
        </div>
        <div className="row-five grid">
          <div type="button" className="col div-col" />
          <button type="button" className="btn">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
