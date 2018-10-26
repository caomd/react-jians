import styled from 'styled-components';
import LogoUrl from '../../static/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${LogoUrl});
  background-size: 100%
`;
export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
`;
export const NavInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 10px;
  border: 1px solid #eee;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  border-radius: 19px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 19px;
  margin-top: 9px;
  font-size: 14px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    width: 100px;
    color: #fff;
    background: #ea6f5a;
  }
`