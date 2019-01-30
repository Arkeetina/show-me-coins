import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsDataReducer from '../reducers/coinsData';
import coinsFilterReducer from '../reducers/coinsFilters';
import coinsUIReducer from '../reducers/coinsUI';
import coinsCalculatorReducer from '../reducers/coinsCalculator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const store = createStore(
    combineReducers({
      coinsData: coinsDataReducer,
      coinsFilters: coinsFilterReducer,
      coinsUI: coinsUIReducer,
      coinsCalculator: coinsCalculatorReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
