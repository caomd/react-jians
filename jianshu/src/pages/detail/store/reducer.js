import { fromJS } from 'immutable';
import { constants } from './';
const defaultVal = fromJS({
  imgUrl:'',
  pageOne: '',
  pageTwo:'',
  time:''
});
const reducer = (state = defaultVal, action) => {
  switch(action.type){
    case constants.GET_DETAIL_CONTENT:
      return state.merge({
        imgUrl: action.imgUrl,
        pageOne: action.pageOne,
        pageTwo: action.pageTwo,
        time: action.time
        }
      );
    default:
      return state;
}};

export default reducer;