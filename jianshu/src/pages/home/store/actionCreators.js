import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from "axios/index";
const getMoreListData = (result,listPage) => ({
  type: constants.GETMORE_LIST,
  list: fromJS(result),
  listPage: fromJS(listPage)
});
const changeHomeData = (result) => ({
    type: constants.CHANGE_LISR,
    recommendList: fromJS(result.recommendList),
    topicList: fromJS(result.topicList),
    articleList: fromJS(result.articleList)
});
const getPrCode = () => ({
  type: constants.GET_PRCODE
});
const changeList = () =>{
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    }).catch((error) => {console.log(error)});
  }
};
const getMoreList = (listPage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(getMoreListData(result,listPage + 1));
    }).catch((error) => {console.log(error)});
  }
};
export {getPrCode, changeList, getMoreList};