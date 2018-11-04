import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from "axios/index";

const changeStatus = (flag) => ({
  type: constants.CHANGE_STATUS,
  flag
});
const changeLoginStatus = (flag) => ({
  type: constants.CHANGE_LOGIN_STATUS,
  flag
});
const loginAccount = (account,password) => {
   return(dispatch) => {
     axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
       if(res.data.success){
          dispatch(changeLoginStatus(true));
       }else{
          alert('登录失败！');
       }
     })
   }
};
export {changeStatus,loginAccount,changeLoginStatus};