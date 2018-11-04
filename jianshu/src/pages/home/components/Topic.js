import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
}from '../style';
class Topic extends Component{
  //  getTopList = () => {
  //    const { topicList } = this.props;
  //    const newTopList = topicList.toJS();
  //    if(newTopList.length!==0){
  //      return (
  //        newTopList.map((item, index) => {
  //          return(
  //            <TopicItem key={item.id}>
  //              <img className="topicItem-img" alt={item.title} src={item.imgUrl}/>
  //              {item.title}
  //            </TopicItem>
  //          )
  //        })
  //      )
  //    }else {
  //      return null;
  //    }
  // };
  render() {
    const {topicList} = this.props;
    return(
      <TopicWrapper>
        {
          //this.getTopList()
          topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img className="topicItem-img" alt={item.get('title')} src={item.get('imgUrl')}/>
              {item.get('title')}
            </TopicItem>
            )
          )
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  //topicList: state.getIn(['home', 'topicList'])
  topicList: state.get('home').get('topicList')
});
export default connect (mapStateToProps, null)(Topic);