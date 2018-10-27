//import {CHANGE_INPUT_FOCUSED, CHANGE_INPUT_BLUR} from '../../../store/actionTypes'
//import * as constants from './constants'
import { fromJS } from 'immutable';
import { constants } from './'
const defaultState = fromJS({
  focused: false,
  list: []
});
const reducer = (state = defaultState, action) => {
  // if(action.type===constants.CHANGE_INPUT_FOCUSED){
  //   // const newState = JSON.parse(JSON.stringify(state));
  //   // newState.focused = true;
  //   // return newState;
  //   // 2.
  //   // return {
  //   //   focused: true
  //   // }
  //   // 3
  //   return state.set('focused',true);
  // }
  // if(action.type === constants.CHANGE_INPUT_BLUR) {
  //   // const newState = JSON.parse(JSON.stringify(state));
  //   // newState.focused = false;
  //   // return newState;
  //   //2.
  //   // return {
  //   //   focused: false
  //   // }
  //   // 3
  //   return state.set('focused', false);
  // }
  // if(action.type === constants.GETLISTITEM) {
  //   return state.set('list', action.list);
  // }
  switch (action.type){
    case constants.CHANGE_INPUT_FOCUSED:
      return state.set('focused',true);
    case constants.CHANGE_INPUT_BLUR:
      return state.set('focused', false);
    case constants.GETLISTITEM:
      return state.set('list', action.list);
    default:
      return state;
  }
};
export default  reducer;