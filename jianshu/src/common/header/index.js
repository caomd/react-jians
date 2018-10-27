import React ,{ Component } from 'react';
//import { changeInputFocused, changInputBlur } from '../../store/actionCreators';
//import * as actionCreators from '../../store/actionCreators';
import { actionCreators } from './store'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavInput,
  Addition,
  Button,
  SearchInfo,
  SeachInfoTitle,
  SearchItem,
  SearchSwitch,
  SearchList,
  SearchWrapper
} from "./style";
// const getSearchItem = (show) => {
//   if(show) {
//     return (
//       <SearchInfo>
//         <SeachInfoTitle>
//           热门搜索
//           <SearchSwitch>换一批</SearchSwitch>
//         </SeachInfoTitle>
//         <SearchList>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//           <SearchItem>教育</SearchItem>
//         </SearchList>
//       </SearchInfo>
//     )
//   }else{
//     return null;
//   }
// };
// const Header = (props) => {
//   const {focused,handleInputFocus,handleInputBlur} = props;
//   return (
//     <HeaderWrapper>
//       <Logo/>
//       <Nav>
//         <NavItem className="left active">首页</NavItem>
//         <NavItem className="left">下载App</NavItem>
//         <SearchWrapper>
//           <CSSTransition
//             in={focused}
//             timeout={200}
//             classNames="slide"
//           >
//             <NavInput className={focused ? 'focus' : ''}
//                       onFocus={handleInputFocus}
//                       onBlur={handleInputBlur}>
//
//             </NavInput>
//           </CSSTransition>
//           <i className={focused ? 'focus iconfont' : 'iconfont'}>&#xe64d;</i>
//           {
//             getSearchItem(focused)
//           }
//         </SearchWrapper>
//         <NavItem className="right">登录</NavItem>
//         <NavItem className="right">
//           <i className="iconfont">&#xe636;</i>
//         </NavItem>
//         <Addition>
//           <Button className="writting">
//             <i className="iconfont">&#xe6a5;</i>
//             写文章</Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </Nav>
//     </HeaderWrapper>
//   )
// }
class Header extends Component{
  getSearchItem = () => {
    const {focused, list} = this.props;
    if(focused) {
      return (
        <SearchInfo>
          <SeachInfoTitle>
            热门搜索
            <SearchSwitch>换一批</SearchSwitch>
          </SeachInfoTitle>
          <SearchList>
            {
              list.map((item, index) => {
                return(
                  <SearchItem key={index}>{item}</SearchItem>
                  )
              })
            }
          </SearchList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  };
  render() {
    const {focused,handleInputFocus,handleInputBlur,list} = this.props;
    console.log(list);
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavInput className={focused ? 'focus' : ''}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}>

              </NavInput>
            </CSSTransition>
            <i className={focused ? 'focus iconfont' : 'iconfont'}>&#xe64d;</i>
            {
              this.getSearchItem()
            }
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <Addition>
            <Button className="writting">
              <i className="iconfont">&#xe6a5;</i>
              写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  //1 return {
  //2 focused: state.header.focused
  //3
  //focused: state.header.get('focused')
  //4
  //focused: state.get('header').get('focused')
  //5
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header','list'])
  //}
});
const mapDispatchToProps = (dispatch) => ({
  //return {
    handleInputFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.changeInputFocused());
    },
    handleInputBlur(){
      const action = actionCreators.changInputBlur();
      dispatch(action);
    }
  //}
})
export default  connect (mapStateToProps,mapDispatchToProps)(Header);