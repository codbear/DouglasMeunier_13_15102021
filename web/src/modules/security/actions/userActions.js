import ACTION_TYPES from '../constants/actionTypes';

const userActions = {
  fetchUserRequest: () => ({ type: ACTION_TYPES.FETCH_USER_REQUEST }),
  fetchUserSuccess: (payload) => ({ type: ACTION_TYPES.FETCH_USER_SUCCESS, payload }),
  fetchUserFailure: () => ({ type: ACTION_TYPES.FETCH_USER_FAILURE }),
  userLogout: () => ({ type: ACTION_TYPES.CURRENT_USER_LOGOUT }),
};

export default userActions;
