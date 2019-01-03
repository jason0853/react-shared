import commonReducer, { initialState as commonState } from './common.reducer';

const initialState = {
  common: commonState,
};

export default (state = initialState, action) => ({
  common: commonReducer(state.test, action),
});
