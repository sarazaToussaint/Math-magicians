import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [obj, setobj] = useState({ total: 0, next: null, operation: null });

  const handleOnclickEvent = (e) => {
    setobj(calculate(obj, e.target.id));
  };

  const { total, next, operation } = obj;

  return (
    <div className="container">
      <h3>Let us do some math!</h3>
      <div className="show-result">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>

      <div className="row-one grid">
        <button type="button" onClick={handleOnclickEvent} id="AC" className="btn">Ac</button>
        <button type="button" onClick={handleOnclickEvent} id="+/-" className="btn">+/-</button>
        <button type="button" onClick={handleOnclickEvent} id="%" className="btn">%</button>
        <button type="button" onClick={handleOnclickEvent} id="÷" className="btn">÷</button>
      </div>
      <div className="row-two grid">
        <button type="button" onClick={handleOnclickEvent} id="7" className="btn">7</button>
        <button type="button" onClick={handleOnclickEvent} id="8" className="btn">8</button>
        <button type="button" onClick={handleOnclickEvent} id="9" className="btn">9</button>
        <button type="button" onClick={handleOnclickEvent} id="x" className="btn">x</button>
      </div>
      <div className="row-three grid">
        <button type="button" onClick={handleOnclickEvent} id="4" className="btn">4</button>
        <button type="button" onClick={handleOnclickEvent} id="5" className="btn">5</button>
        <button type="button" onClick={handleOnclickEvent} id="6" className="btn">6</button>
        <button type="button" onClick={handleOnclickEvent} id="-" className="btn">-</button>
      </div>
      <div className="row-four grid">
        <button type="button" onClick={handleOnclickEvent} id="1" className="btn">1</button>
        <button type="button" onClick={handleOnclickEvent} id="2" className="btn">2</button>
        <button type="button" onClick={handleOnclickEvent} id="3" className="btn">3</button>
        <button type="button" onClick={handleOnclickEvent} id="+" className="btn">+</button>
      </div>
      <div className="row-five grid">
        <button type="button" onClick={handleOnclickEvent} id="0" className="btn">0</button>
        <button type="button" onClick={handleOnclickEvent} id="." className="btn">.</button>
        <button type="button" onClick={handleOnclickEvent} id="=" className="btn">=</button>
      </div>
    </div>
  );
};

export default Calculator;
