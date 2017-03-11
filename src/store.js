import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

export default (initialState = {}) => {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }
  const store = createStore(reducers, initialState, middleware);
  if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
      store.replaceReducer(require('./reducers/reducers').default);
    });
  }
  return store;
};
