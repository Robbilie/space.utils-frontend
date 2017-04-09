import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';

import layout from './layout';

export default combineReducers({
  user,
  runtime,
  layout,
});
