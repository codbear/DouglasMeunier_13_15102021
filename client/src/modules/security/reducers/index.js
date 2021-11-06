import ACTION_TYPES from '../constants/actionTypes';

const initialState = {
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_USER_INFO_SUCCESS:
    case ACTION_TYPES.FETCH_USER_SUCCESS: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    }

    case ACTION_TYPES.LOGOUT_SUCCESS:
    case ACTION_TYPES.LOGIN_FAILURE:
    case ACTION_TYPES.FETCH_USER_FAILURE: {
      return {
        ...state,
        ...initialState,
      };
    }

    default:
      return state;
  }
}
