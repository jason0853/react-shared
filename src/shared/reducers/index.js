import commonReducer, { initialState as commonState } from './common.reducer';
import counterReducer, {
  initialState as counterState,
} from './counter.reducer';
import testReducer, { initialState as testState } from './test.reducer';

const initialState = {
  common: commonState,
  counter: counterState,
  test: testState,
};

export default (state = initialState, action) => ({
  common: commonReducer(state.common, action),
  counter: counterReducer(state.counter, action),
  test: testReducer(state.test, action),
});
