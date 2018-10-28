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
    const {focused, list, page, rotateIcon, totalPage, mouseEnter, mouseIn, mouseLeave, handleSwitch} = this.props;
    const pageList = [];
    const newList = list.toJS();
    //let lastPage = (page-1) * 10 + newList.length-(totalPage-1)*10;
    // if(page !== totalPage){
    //   for(let i = (page - 1) * 10; i < page * 10; i++){
    //     pageList.push(<SearchItem key={i}>{newList[i]}</SearchItem>);
    //   }
    // }else{
    //   for(let i = (page - 1) * 10; i < lastPage; i++){
    //     pageList.push(<SearchItem key={i}>{newList[i]}</SearchItem>);
    //   }
    // }
    for(let i = (page - 1) * 10; i < page * 10; i++){
      if(newList[i]!==undefined){
        pageList.push(<SearchItem key={i}>{newList[i]}</SearchItem>);
      }
      // console.log(newList[i]);
      // pageList.push(<SearchItem key={i}>{newList[i]}</SearchItem>);
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}>
          <SeachInfoTitle>
            热门搜索
            <SearchSwitch rotateIcon = {{rotateIcon: rotateIcon}} onClick={() => handleSwitch(page, totalPage, rotateIcon)}>
              <i ref={(spin) => {this.spinIcon = spin}} className="iconfont spin">&#xe705;</i>
              换一批
            </SearchSwitch>
          </SeachInfoTitle>
          <SearchList>
            {
              pageList
            }
          </SearchList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  };
  render() {
    const {focused,list, handleInputFocus,handleInputBlur} = this.props;
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
                        onFocus={() => handleInputFocus(list)}
                        onBlur={handleInputBlur}>

              </NavInput>
            </CSSTransition>
            <i className={focused ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe64d;</i>
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
  list: state.getIn(['header','list']),
  page: state.getIn(['header','page']),
  totalPage: state.getIn(['header','totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  rotateIcon: state.getIn(['header', 'rotateIcon'])
  //}
});
const mapDispatchToProps = (dispatch) => ({
  //return {
    handleInputFocus(list){
      // if(list.size === 0) {
      //   dispatch(actionCreators.getList());
      // }
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.changeInputFocused());
    },
    handleInputBlur(){
      const action = actionCreators.changInputBlur();
      dispatch(action);
    },
  mouseEnter(){
      const action = actionCreators.mouseEnter();
      dispatch(action);
  },
  mouseLeave() {
    const action = actionCreators.mouseLeave();
    dispatch(action);
  },
  handleSwitch(page, totalPage, rotateIcon) {
      //console.log(rotateIcon);
      //  let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      // if(originAngle) {
      //   originAngle = parseInt(originAngle, 10);
      // }else{
      //   originAngle = 0;
      // }
      // spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg';
      rotateIcon = rotateIcon + 360;
      if(page < totalPage) {
        dispatch(actionCreators.handleSwitch(page+1, rotateIcon));
      }else{
        dispatch(actionCreators.handleSwitch(1, rotateIcon));
      }
  }
  //}
})
export default  connect (mapStateToProps,mapDispatchToProps)(Header);