import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Route } from 'react-router-dom';
import { Home, Intro, Playlist } from './routes';

@withRouter
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
      <div className="App">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/intro">소개</Link>
          </li>
          <li>
            <Link to="/playlist">학습 플레이리스트</Link>
          </li>
        </ul>
        <h1>{this.props.ui}</h1>
        <h2>{this.props.common}</h2>
        {process.env.REACT_APP_API_URL}
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/playlist" component={Playlist} />
      </div>
    );
  }
}

export default App;
