// export { default as Home } from './Home';
// export { default as Intro } from './Intro';
// export { default as Playlist } from './Playlist';

import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return <div>로딩중</div>;
};

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export const Intro = Loadable({
  loader: () => import('./Intro'),
  loading: Loading,
});

export const Playlist = Loadable({
  loader: () => import('./Playlist'),
  loading: Loading,
});
