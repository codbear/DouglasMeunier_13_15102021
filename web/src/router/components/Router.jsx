import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { HomeScreen } from '../../modules/home';
import { LoginScreen, useCurrentUser } from '../../modules/security';
import { ProfileScreen } from '../../modules/accounts';
import { useEffect, useState } from 'react';
import { Layout } from '../../modules/layout';

const Switcher = () => {
  const location = useLocation();
  const currentUser = useCurrentUser();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (location.pathname === ROUTES.HOME) {
      setIsDark(false);
      return;
    }

    setIsDark(true);
  }, [location, setIsDark]);

  return (
    <Layout isDark={isDark} user={currentUser}>
      <Switch>
        <Route exact path={ROUTES.AUTH.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={ROUTES.PROFILE.INDEX}>
          <ProfileScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Layout>
  );
};

const WithBrowserRouter = () => (
  <BrowserRouter>
    <Switcher />
  </BrowserRouter>
);

export default WithBrowserRouter;
