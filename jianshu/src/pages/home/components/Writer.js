import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Writer extends PureComponent{
  render(){
    const {loginStatus} = this.props;
    if(loginStatus){
      return(
        <div>写文章</div>
      )
    }else{
      return <Redirect to="/login"/>
    }
  }
}
const mapStatetoProps = (state) => ({
  loginStatus: state.getIn(['login','login'])
});
export default connect(mapStatetoProps, null)(Writer);