import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsDataReducer from '../reducers/coinsData';
import coinsFilterReducer from '../reducers/coinsFilters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      coinsData: coinsDataReducer,
      coinsFilters: coinsFilterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
