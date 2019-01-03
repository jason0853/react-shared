import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  (state, props) => ({
    ui: state.ui.name,
    common: state.shared.common.name,
  }),
  {},
)
class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ui}</h1>
        <h2>{this.props.common}</h2>
        {process.env.REACT_APP_API_URL}
      </div>
    );
  }
}

export default App;
