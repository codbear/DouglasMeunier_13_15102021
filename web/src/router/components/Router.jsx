import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { HomeScreen } from '../../modules/home';
import { SignInScreen } from '../../modules/security';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <HomeScreen />
        </Route>
        <Route exact path={ROUTES.AUTH.SIGN_IN}>
          <SignInScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
