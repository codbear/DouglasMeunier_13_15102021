import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import { Router } from './router';

library.add(faUserCircle);

const App = () => <Router />;

export default App;
