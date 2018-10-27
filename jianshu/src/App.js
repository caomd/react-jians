import React, { Component,Fragment } from 'react';
import Header from './common/header/index';
import store from './store/index';
import { Provider } from 'react-redux';
import { GlobalStyle} from "./style";
import { IconStyle } from './static/iconfonts/iconfont';
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconStyle/>
        <Provider store={store}>
          <Header/>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
