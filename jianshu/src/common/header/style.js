import styled from 'styled-components';
import LogoUrl from '../../static/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
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
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 10px;
  border: 1px solid #eee;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  color: #666;
  border-radius: 19px;
  background: #eee;
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit{
    transition: all .2s ease-out
  }
  &.slide-exit-active {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
  &.focus{
    width: 320px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  padding: 0 20px;
  width: 240px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2)
`;
export const SeachInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(${props => (props.rotateIcon.rotateIcon)}deg);
  }
`;
export const SearchItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  color: #787878;
  cursor: pointer;
`;
export const SearchList = styled.div`
  overflow: hidden;
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  height: 38px;
  line-height: 24px;
  margin-right: 20px;
  width: 80px;
  text-align: center;
  padding: 6px 20px;
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
`;
export const SearchWrapper = styled.div`
  z-index: 1;
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #999;
    &.focus{
      background: #969696;
      color: #fff;
    }
  }
`;