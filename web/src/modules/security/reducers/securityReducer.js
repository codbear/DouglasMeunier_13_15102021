import ACTION_TYPES from '../constants/actionTypes';
import ClientApi from '../../../api/models/ClientApi';

const isConnected = Boolean(new ClientApi().checkLoginStatus());

const initialState = {
  isConnected,
};

export default function securityReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        isConnected: true,
      };
    }

    case ACTION_TYPES.LOGIN_REQUEST:
    case ACTION_TYPES.LOGIN_FAILURE:
    case ACTION_TYPES.LOGOUT: {
      return {
        ...state,
        isConnected: false,
      };
    }

    default:
      return state;
  }
}
