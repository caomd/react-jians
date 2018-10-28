import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../store';
import {
  RecommendsItem,
  RecommendDown,
  RecommendInfo,
  RecommendQrcode
}
from '../style'
class Recommends extends Component{
  getPrCode = () => {
    const {isPrCode} = this.props;
    if(isPrCode){
      return (
        <RecommendQrcode>
          <img className="qrcode-img" src="//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png"/>
        </RecommendQrcode>
      )
    }else{
      return null;
    }
  }
  render() {
    const { list, onMouseEnter } = this.props;
    return(
      <div>
        <RecommendsItem>
          {
            list.map((item) => (
              <img className="rec-img" alt="" key={item} src={item.get('imgUrl')}/>
            ))
          }
        </RecommendsItem>
        <RecommendDown>
          <img className="down-img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode" />
          <RecommendInfo onMouseEnter={onMouseEnter}>
            <h3 className="title">下载简书手机APP<i className="iconfont">&#xe604;</i></h3>
            <p className="desc">随时随地发现和创作内容</p>
          </RecommendInfo>
        </RecommendDown>
        {
          this.getPrCode()
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
  isPrCode: state.getIn(['home','isPrCode'])
});
const mapDispatch = (dispatch) => ({
  onMouseEnter(){
    dispatch(actionCreators.getPrCode());
  }
});
export default connect(mapState,mapDispatch)(Recommends);