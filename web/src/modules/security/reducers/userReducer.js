import ACTION_TYPES from '../constants/actionTypes';

const initialState = {
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USER_SUCCESS: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    }

    case ACTION_TYPES.CURRENT_USER_LOGOUT:
    case ACTION_TYPES.FETCH_USER_FAILURE: {
      return {
        ...state,
        ...initialState,
      };
    }

    case ACTION_TYPES.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}
