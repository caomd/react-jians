import {reducer as headerReducer} from '../common/header/store';
import {reducer as homerReducer} from '../pages/home/store';
import {reducer as detailReducer } from '../pages/detail/store';
import {reducer as loginReducer } from '../pages/login/store';
import {reducer as writeReducer } from '../pages/write/store';
import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
  header: headerReducer,
  home: homerReducer,
  detail: detailReducer,
  login: loginReducer,
  write:writeReducer
});

export  default reducer;