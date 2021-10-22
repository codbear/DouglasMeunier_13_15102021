import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Router } from './router';

library.add(faUserCircle, faSignOutAlt);

const App = () => <Router />;

export default App;
