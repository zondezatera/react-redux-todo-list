import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from './reducers';

export default (initialState) => {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension(), autoRehydrate());
    }
  }
  const store = createStore(reducers, initialState, middleware);
  persistStore(store)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
};
