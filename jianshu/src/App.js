import React, { Component,Fragment } from 'react';
import Header from './common/header/index';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import { GlobalStyle} from "./style";
import { IconStyle } from './static/iconfonts/iconfont';
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconStyle/>
        <Provider store={store}>
          <div>
            <Header/>
            <BrowserRouter>
              <div>
                {/*<Route path='/' exact render={() => <div>home</div>}/>*/}
                {/*<Route path='/detail' exact render={() => <div>detail</div>}/>*/}
                <Route path='/' exact component={Home}/>
                <Route path='/detail' exact component={Detail}/>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
