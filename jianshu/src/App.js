import React, { Component,Fragment } from 'react';
import Index from './common/header/index'
import { GlobalStyle} from "./style";
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Index/>
      </Fragment>
    );
  }
}

export default App;
