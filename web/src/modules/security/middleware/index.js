import { api } from '../../../api';
import actions from '../actions';
import ACTION_TYPES from '../constants/actionTypes';

const securityMiddleware = (store) => (next) => async (action) => {
  const nextReturn = next(action);

  switch (action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
      try {
        await api.security().login(action.payload);

        return store.dispatch(actions.loginSuccess());
      } catch (error) {
        return store.dispatch(actions.loginFailure());
      }

    case ACTION_TYPES.LOGOUT:
      api.security().logout();
      break;

    default:
      break;
  }

  return nextReturn;
};

export default securityMiddleware;
