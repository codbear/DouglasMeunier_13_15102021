import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { HomeScreen } from '../../modules/home';
import { LoginScreen } from '../../modules/security';
import { ProfileScreen } from '../../modules/accounts';

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
