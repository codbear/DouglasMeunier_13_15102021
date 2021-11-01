import ACTION_TYPES from '../constants/actionTypes';

const securityActions = {
  login: (userCredentials) => ({
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: { ...userCredentials },
  }),
  loginSuccess: () => ({ type: ACTION_TYPES.LOGIN_SUCCESS }),
  loginFailure: () => ({ type: ACTION_TYPES.LOGIN_FAILURE }),
  logout: () => ({ type: ACTION_TYPES.LOGOUT }),
};

export default securityActions;