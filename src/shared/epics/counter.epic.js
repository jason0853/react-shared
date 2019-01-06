import { ofType, combineEpics } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import * as counter from 'shared/actions/counter.action';

const increaseRequestEpic = action$ =>
  action$.pipe(
    ofType(counter.INCREASE_REQUEST),
    delay(1000),
    mapTo(counter.increaseSuccess()),
  );

export default combineEpics(increaseRequestEpic);
