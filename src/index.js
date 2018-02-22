import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {BrowserRouter,Route, Switch} from 'react-router-dom';

import reducers from './reducers';

import PostIndex from './components/posts_index.js'
import PostsNew from './components/posts_new.js'
import PostsShow from './components/posts_show.js'

import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class GoodBye extends React.Component{
  render(){
    return(
      <div>GoodBye</div>
    );
  }
}


class Hii extends React.Component{
  render(){
    return(
      <div>Hi</div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
     <Route path="/posts/new" component={PostsNew} />
     <Route path="/posts/:id" component={PostsShow} />
     <Route path="/" component={PostIndex} />
    </Switch>
  </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
