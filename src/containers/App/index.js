import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Banner from '../../components/Banner';
import CategoryList from '../../components/CategoryList';
import store from '../../store';
import JokeView from '../../components/JokeView';

const history = syncHistoryWithStore(createBrowserHistory(), store);

export default () => (
  <Provider store={store} history={history}>
    <BrowserRouter>
      <div>
        <Banner />
        <Switch>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/:cat" component={JokeView} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
