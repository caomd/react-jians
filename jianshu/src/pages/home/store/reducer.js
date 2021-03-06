import {fromJS} from 'immutable';
import { constants } from './index';
const defaultVal = fromJS({
  isPrCode: false,
  topicList: [],
  articleList: [],
  recommendList:[],
  listPage:1,
  showScroll:false
});
const reducer = (state=defaultVal, action) => {
  switch (action.type) {
    case constants.GET_PRCODE:
      return state.set('isPrCode', true);
    case constants.CHANGE_LISR:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      });
    case constants.GETMORE_LIST:
      return state.merge({
        listPage: action.listPage,
        articleList: state.get('articleList').concat(action.list)
      });
    case constants.CHANGE_SHOW_SCROLL:
      return state.set('showScroll',action.bool);
    default:
      return state;
  }
};

export default reducer;