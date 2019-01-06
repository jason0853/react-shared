import * as counter from 'shared/actions/counter.action';

export const initialState = {
  value: 0,
};

export default (state = initialState, { type, action }) => {
  switch (type) {
    case counter.INCREASE_SUCCESS:
      return {
        ...state,
        value: state.value + 1,
      };
    case counter.DECREASE_REQUEST:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
