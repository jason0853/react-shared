export const initialState = {
  name: 'modules',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_MODULE_SUCCESS':
      return {
        ...state,
        name: 'modules화 성공',
      };
    default:
      return state;
  }
};
