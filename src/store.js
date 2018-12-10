import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootReducer from './reducers/appReducer';


const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
