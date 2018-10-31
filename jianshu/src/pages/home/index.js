import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, Recommends, Writer, Topic} from './components/index';
import { actionCreators } from './store';
import { BackTop } from './style';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
}
from './style'
class Home extends Component{
  render() {
    const { showScroll } = this.props;
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img"
               alt="homeTitle"
               src="https://upload.jianshu.io/admin_banners/web_images/4520/83fadd2df821d52fb277287ac4a189e8d21b7b65.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommends/>
          <Writer/>
        </HomeRight>
        {
          showScroll?
            <BackTop onClick={this.handleScrollTo}>顶部</BackTop>
            :
            null
        }
      </HomeWrapper>
    )
  }
  handleScrollTo() {
    window.scrollTo(0, 0);
  }
  bindScroll(){
    window.addEventListener('scroll',this.props.changeScroll);
  }
componentDidMount() {
  this.props.getHomeList();
  this.bindScroll();
}
}
const mapStateToprops = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatchProps = (dispatch) => ({
  getHomeList() {
    dispatch(actionCreators.changeList());
  },
  changeScroll() {
    //console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleShowScroll(true));
    }else{
      dispatch(actionCreators.toggleShowScroll(false));
    }
  }
});
export default connect(mapStateToprops, mapDispatchProps)(Home);