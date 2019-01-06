import { ofType, combineEpics } from 'redux-observable';
import { map, mapTo, mergeMap } from 'rxjs/operators';

import * as test from 'shared/actions/test.action';
import * as counter from 'shared/actions/counter.action';
import * as testAPI from 'shared/apis/test.api';

const testRequestEpic = action$ =>
  action$.pipe(
    ofType(test.TEST_REQUEST),
    mergeMap(action =>
      testAPI
        .test$(action.payload)
        .pipe(map(response => test.testSuccess(response))),
    ),
  );

const testSuccessEpic = action$ =>
  action$.pipe(
    ofType(test.TEST_SUCCESS),
    mapTo(counter.increaseSuccess()),
  );

export default combineEpics(testRequestEpic, testSuccessEpic);
