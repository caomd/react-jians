//import {CHANGE_INPUT_FOCUSED, CHANGE_INPUT_BLUR} from '../../../store/actionTypes'
//import * as constants from './constants'
import { fromJS } from 'immutable';
import { constants } from './'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  rotateIcon: 0
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
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      });
      //return state.set('list', action.list).set('totalPage',action.totalPage);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_SWITCH:
      return state.merge({
        page: action.page,
        rotateIcon: action.rotateIcon
      });
      //return state.set('page', action.page);
    default:
      return state;
  }
};
export default  reducer;