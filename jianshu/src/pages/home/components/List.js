import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo
}
from '../style';
class List extends Component{
  render() {
    const { articleList } = this.props;
    return(
      <div>
        {
          articleList.map((item) => (
            <ListItem key={item.get('id')}>
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
      </div>
    )
  }
}
const mapState = (state) => ({
  articleList: state.get('home').get('articleList')
});
export default connect(mapState, null)(List);