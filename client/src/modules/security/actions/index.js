import ACTION_TYPES from '../constants/actionTypes';

export const loginRequest = (email, password) => ({
  type: ACTION_TYPES.LOGIN_REQUEST,
  payload: { email, password },
});
export const loginSuccess = () => ({ type: ACTION_TYPES.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: ACTION_TYPES.LOGIN_FAILURE });

export const logoutRequest = () => ({ type: ACTION_TYPES.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: ACTION_TYPES.LOGOUT_SUCCESS });
export const logoutFailure = () => ({ type: ACTION_TYPES.LOGOUT_FAILURE });

export const fetchUserRequest = () => ({ type: ACTION_TYPES.FETCH_USER_REQUEST });
export const fetchUserSuccess = (userInfo) => ({
  type: ACTION_TYPES.FETCH_USER_SUCCESS,
  payload: { ...userInfo },
});
export const fetchUserFailure = () => ({ type: ACTION_TYPES.FETCH_USER_FAILURE });

export const updateUserRequest = (firstName, lastName) => ({
  type: ACTION_TYPES.UPDATE_USER_INFO_REQUEST,
  payload: { firstName, lastName },
});
export const updateUserSuccess = (userInfo) => ({
  type: ACTION_TYPES.UPDATE_USER_INFO_SUCCESS,
  payload: { ...userInfo },
});
export const updateUserFailure = () => ({ type: ACTION_TYPES.UPDATE_USER_INFO_FAILURE });
