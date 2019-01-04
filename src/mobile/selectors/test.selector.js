import { createSelector } from 'reselect';

const getItems = ({ test }) => test.items;

export const getTotal = createSelector(
  [getItems],
  items => items.reduce((acc, curr) => acc + curr),
);
