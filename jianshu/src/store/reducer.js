import {reducer as headerReducer} from '../common/header/store';
import {reducer as homerReducer} from '../pages/home/store';
import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
  header: headerReducer,
  home: homerReducer
});

export  default reducer;