import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { HomeScreen } from '../../modules/home';
import { SignInScreen } from '../../modules/security';
import { AccountsScreen } from '../../modules/accounts';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.AUTH.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path={ROUTES.ACCOUNTS.INDEX}>
          <AccountsScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
