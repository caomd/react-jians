import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
  DetailWrapper,
  DetailTitle,
  Title,
  TitleContent,
  Content,
  Time,
  DetailContent
}
from './style'
class Detail extends PureComponent{
  render() {
    const { imgUrl, pageOne, pageTwo, time } = this.props;
    return(
      <DetailWrapper>
        <DetailTitle>
          【虐】一世繁华
          <Title>
            <img className="imgTitle" src={imgUrl}/>
            <TitleContent>
              <Content>愿岁月温柔回首</Content>
              <Time title="最后创建于2018.08.20 15:19">{time}</Time>
            </TitleContent>
          </Title>
        </DetailTitle>
        <DetailContent>
          <p>{pageOne}</p>
          <hr className="border"/>
          <p>{pageTwo}</p>
        </DetailContent>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetailContent(this.props.match.params.id);
  }
}
const mapState = (state) => ({
  imgUrl: state.getIn(['detail','imgUrl']),
  pageOne: state.getIn(['detail','pageOne']),
  pageTwo: state.getIn(['detail','pageTwo']),
  time: state.getIn(['detail','time'])
});
const mapDispatch = (dispatch) => ({
  getDetailContent(id){
    dispatch(actionCreators.getDetailContent(id));
  }
});
export default connect(mapState, mapDispatch)(Detail);