import React from 'react';

import './counter.scss';

const Counter = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="counter">
      <h1>{value}</h1>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
      <div>
        이미지 테스트 : <span className="play-btn" />
      </div>
    </div>
  );
};

export default Counter;
