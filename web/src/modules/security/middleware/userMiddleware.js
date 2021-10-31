import { api } from '../../../api';
import actions from '../actions/userActions';
import ACTION_TYPES from '../constants/actionTypes';

const securityMiddleware = (store) => (next) => async (action) => {
  const nextReturn = next(action);

  switch (action.type) {
    case ACTION_TYPES.FETCH_USER_REQUEST:
      try {
        const response = await api.profile().me();

        return store.dispatch(actions.fetchUserSuccess(response.data.body));
      } catch (error) {
        return store.dispatch(actions.fetchUserFailure());
      }

    default:
      break;
  }

  return nextReturn;
};

export default securityMiddleware;
