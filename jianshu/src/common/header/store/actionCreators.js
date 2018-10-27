//import {CHANGE_INPUT_FOCUSED, CHANGE_INPUT_BLUR} from './constants';
//import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './';
const getListItem = (list) => ({
  type: constants.GETLISTITEM,
  list: fromJS(list)
});
const changeInputFocused = () => ({
  type: constants.CHANGE_INPUT_FOCUSED
});
const changInputBlur = () => ({
  type: constants.CHANGE_INPUT_BLUR
});
const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(getListItem(data.data));
    }).catch(() => {
      console.log('error');
    })
  }
}
export {changeInputFocused, changInputBlur, getList};