import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Router } from './router';
import store from './lib/store';

library.add(faUserCircle, faSignOutAlt);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
