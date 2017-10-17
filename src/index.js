import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { AppContainer } from 'react-hot-loader';
import Root from './root';

const store = configureStore();
function init (Component) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

init(Root);
if (module.hot) {
  module.hot.accept('./root', () => {
    inti(Root)
  })
}
