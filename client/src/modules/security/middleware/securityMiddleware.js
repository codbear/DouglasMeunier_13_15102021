import { api } from '../../../api';
import securityActions from '../actions/securityActions';
import userActions from '../actions/userActions';
import ACTION_TYPES from '../constants/actionTypes';

const securityMiddleware = (store) => (next) => async (action) => {
  const nextReturn = next(action);

  switch (action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
      try {
        await api.security().login(action.payload);

        return store.dispatch(securityActions.loginSuccess());
      } catch (error) {
        return store.dispatch(securityActions.loginFailure());
      }

    case ACTION_TYPES.LOGIN_SUCCESS:
      return store.dispatch(userActions.fetchUserRequest());

    case ACTION_TYPES.LOGOUT:
      api.security().logout();

      return store.dispatch(userActions.userLogout());

    default:
      break;
  }

  return nextReturn;
};

export default securityMiddleware;
