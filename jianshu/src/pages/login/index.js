import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store'
import {
  LoginWrapper,
  LogBox,
  Input,
  Button,
  Title
}
  from './style'
class Login extends PureComponent{
  render(){
    const {clickLogin,changStatus,loginClick,login} = this.props;
    if(!login){
      return(
        <LoginWrapper>
          <LogBox>
            <Title>
              <span style={{borderBottom: 'none'}} className={clickLogin?"title border":"title"} onClick={()=>changStatus(true)}>登录</span>
              <span className="titlePoint">·</span>
              <span className={!clickLogin?"title border":"title"} onClick={()=>changStatus(false)}>注册</span>
            </Title>
            <Input className="border-bottom" placeholder="手机号或邮箱" ref={(input) => {this.account = input}}/>
            <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
            <Button onClick={() => loginClick(this.account,this.password)}>登录</Button>
          </LogBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to="/"/>
    }
  }
  componentDidMount(){
  }
}
const mapStatetoProps = (state) => ({
  clickLogin: state.getIn(['login','clickLogin']),
  login: state.getIn(['login','login'])
});
const mapDispatch = (dispatch) => ({
  changStatus(flag){
    dispatch(actionCreators.changeStatus(flag));
  },
  loginClick(account,password) {
    dispatch(actionCreators.loginAccount(account.value,password.value));
  }
});
export default connect(mapStatetoProps, mapDispatch)(Login);