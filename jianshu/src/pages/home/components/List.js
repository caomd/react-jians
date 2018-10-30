import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore
}
from '../style';
class List extends Component{
  render() {
    const { articleList,getLoadMoreList,listPage } = this.props;
    return(
      <div>
        {
          articleList.map((item, index) => (
            <ListItem key={index}>
              {
                item.get('imgUrl')!==''?
                  <img className="list-img" alt="listTitle"
                       src={item.get('imgUrl')}/>
                  :
                  ''
              }
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => getLoadMoreList(listPage)}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  articleList: state.get('home').get('articleList'),
  listPage: state.getIn(['home','listPage'])
});
const mapDispatchProps = (dispatch) => ({
  getLoadMoreList(listPage){
    console.log(listPage);
    dispatch(actionCreators.getMoreList(listPage));
  }
});
export default connect(mapState, mapDispatchProps)(List);