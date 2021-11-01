import ACTION_TYPES from '../constants/actionTypes';

const userActions = {
  fetchUserRequest: () => ({ type: ACTION_TYPES.FETCH_USER_REQUEST }),
  fetchUserSuccess: (userCredentials) => ({
    type: ACTION_TYPES.FETCH_USER_SUCCESS,
    payload: { ...userCredentials },
  }),
  fetchUserFailure: () => ({ type: ACTION_TYPES.FETCH_USER_FAILURE }),
  userLogout: () => ({ type: ACTION_TYPES.CURRENT_USER_LOGOUT }),
  updateUserRequest: (userInfo) => ({
    type: ACTION_TYPES.UPDATE_USER_INFO_REQUEST,
    payload: { ...userInfo },
  }),
  updateUserSuccess: (updatedUserInfo) => ({
    type: ACTION_TYPES.UPDATE_USER_INFO_SUCCESS,
    payload: { ...updatedUserInfo },
  }),
  updateUserFailure: () => ({ type: ACTION_TYPES.UPDATE_USER_INFO_FAILURE }),
};

export default userActions;
