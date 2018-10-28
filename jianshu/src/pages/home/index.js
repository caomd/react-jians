import React, { Component } from 'react';
import {List, Recommends, Writer, Topic} from './components/index'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
}
from './style'
class Home extends Component{
  render() {
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
      </HomeWrapper>
    )
  }
}
export default Home;