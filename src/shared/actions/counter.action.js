export const INCREASE_REQUEST = '@counter/INCREASE_REQUEST';
export const INCREASE_SUCCESS = '@counter/INCREASE_SUCCESS';
export const DECREASE_REQUEST = '@counter/DECREASE_REQUEST';

export const increaseRequest = () => ({
  type: INCREASE_REQUEST,
});

export const increaseSuccess = () => ({
  type: INCREASE_SUCCESS,
});

export const decreaseRequest = () => ({
  type: DECREASE_REQUEST,
});
