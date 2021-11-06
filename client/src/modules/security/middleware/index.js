import { api } from '../../../api';
import * as actions from '../actions';
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

    case ACTION_TYPES.LOGIN_SUCCESS:
      return store.dispatch(actions.fetchUserRequest());

    case ACTION_TYPES.FETCH_USER_REQUEST:
      try {
        const response = await api.profile().me();

        return store.dispatch(actions.fetchUserSuccess(response.data.body));
      } catch (error) {
        return store.dispatch(actions.fetchUserFailure());
      }

    case ACTION_TYPES.UPDATE_USER_INFO_REQUEST:
      try {
        const response = await api.profile().updateMe(action.payload);

        return store.dispatch(actions.updateUserSuccess(response.data.body));
      } catch (e) {
        return store.dispatch(actions.updateUserFailure());
      }

    case ACTION_TYPES.LOGOUT_REQUEST:
      try {
        await api.security().logout();

        return store.dispatch(actions.logoutSuccess());
      } catch (e) {
        return store.dispatch(actions.logoutFailure());
      }

    default:
      break;
  }

  return nextReturn;
};

export default securityMiddleware;
