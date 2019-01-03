import { combineReducers } from 'redux';
import shared from 'shared/reducers';
import ui from './ui.reducer';

export default combineReducers({
  shared,
  ui,
});
