import { ajax } from 'rxjs/ajax';

export const test$ = number =>
  ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${number}`);
