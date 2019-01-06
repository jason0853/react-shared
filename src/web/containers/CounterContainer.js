import React, { Component } from 'react';
import Counter from 'web/components/Counter';
import { connect } from 'react-redux';

import {
  increaseRequest,
  decreaseRequest,
} from 'shared/actions/counter.action';

@connect(
  state => ({
    value: state.shared.counter.value,
  }),
  {
    increaseRequest,
    decreaseRequest,
  },
)
class CounterContainer extends Component {
  handleIncrease = () => {
    this.props.increaseRequest();
  };

  handleDecrease = () => {
    this.props.decreaseRequest();
  };

  render() {
    const { handleIncrease, handleDecrease } = this;
    const { value } = this.props;

    return (
      <Counter
        value={value}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    );
  }
}

export default CounterContainer;
