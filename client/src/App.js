import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Router } from './router';
import { fetchUserRequest, useCurrentUser } from './modules/security';

library.add(faUserCircle, faSignOutAlt);

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUserRequest());
    }
  }, [currentUser, dispatch]);

  return <Router />;
};

export default App;
