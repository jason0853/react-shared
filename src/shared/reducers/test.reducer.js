import * as test from 'shared/actions/test.action';

export const initialState = {
  title: 'TEST API',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case test.TEST_SUCCESS:
      return {
        ...state,
        title: payload.title,
      };
    default:
      return state;
  }
};
