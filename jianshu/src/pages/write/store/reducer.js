import {fromJS} from 'immutable';
const defaultVal = fromJS({
  clickLogin:true,
  login: false
});
const reducer = (state=defaultVal, action) => {
      return state;
};

export default reducer;