import React ,{ Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavInput,
  Addition,
  Button
} from "./style";

class Index extends Component{

  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavInput></NavInput>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <Addition>
            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default  Index;