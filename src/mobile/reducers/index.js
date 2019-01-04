import { combineReducers } from 'redux';
import shared from 'shared/reducers';
import ui from './ui.reducer';
import test from './test.reducer';

export default combineReducers({
  shared,
  ui,
  test,
});
