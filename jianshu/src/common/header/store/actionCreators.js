//import {CHANGE_INPUT_FOCUSED, CHANGE_INPUT_BLUR} from './constants';
//import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from './';
const getListItem = (list) => ({
  type: constants.GETLISTITEM,
  list: fromJS(list),
  totalPage: fromJS(Math.ceil(list.length/10))
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
};
const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
const handleSwitch = (page, rotateIcon) => ({
  type: constants.CHANGE_SWITCH,
  page,
  rotateIcon

});
export {changeInputFocused, changInputBlur, getList, mouseEnter, mouseLeave, handleSwitch};