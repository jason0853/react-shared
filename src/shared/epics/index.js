import { combineEpics } from 'redux-observable';

import counterEpic from './counter.epic';
import testEpic from './test.epic';

export default combineEpics(counterEpic, testEpic);
