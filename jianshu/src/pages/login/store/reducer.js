import {fromJS} from 'immutable';
import { constants } from './index';
const defaultVal = fromJS({
  clickLogin:true,
  login: false
});
const reducer = (state=defaultVal, action) => {
  switch (action.type) {
    case constants.CHANGE_STATUS:
      return state.set('clickLogin',action.flag);
    case constants.CHANGE_LOGIN_STATUS:
      return state.set('login', action.flag);
    default:
      return state;
  }
};

export default reducer;