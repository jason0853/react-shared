export const TEST_REQUEST = '@test/TEST_REQUEST';
export const TEST_SUCCESS = '@test/TEST_SUCCESS';

export const testRequest = payload => ({
  type: TEST_REQUEST,
  payload,
});

export const testSuccess = payload => ({
  type: TEST_SUCCESS,
  payload,
});
