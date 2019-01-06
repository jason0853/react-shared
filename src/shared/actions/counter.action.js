export const INCREASE_REQUEST = '@COUNTER/INCREASE_REQUEST';
export const INCREASE_SUCCESS = '@COUNTER/INCREASE_SUCCESS';
export const DECREASE_REQUEST = '@COUNTER/DECREASE_REQUEST';

export const increaseRequest = () => ({
  type: INCREASE_REQUEST,
});

export const increaseSuccess = () => ({
  type: INCREASE_SUCCESS,
});

export const decreaseRequest = () => ({
  type: DECREASE_REQUEST,
});
