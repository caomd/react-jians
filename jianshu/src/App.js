import React, { Component,Fragment } from 'react';
import Header from './common/header/index';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Login from './pages/login/index';
import Write from './pages/write/index';
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
            <BrowserRouter>
              <Fragment>
                <Header/>
                {/*<Route path='/' exact render={() => <div>home</div>}/>*/}
                {/*<Route path='/detail' exact render={() => <div>detail</div>}/>*/}
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/detail/:id' exact component={Detail}/>
                <Route path='/write' exact component={Write}/>
              </Fragment>
            </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
