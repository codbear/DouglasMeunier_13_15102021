import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { HomeScreen } from '../../modules/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <HomeScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
