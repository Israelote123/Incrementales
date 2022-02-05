import {USER_LOGIN, USER_UNLOGIN, USER_LOGIN_SUCCEED, USER_LOGIN_ERROR, USER_SAVE_DATA} from "../actions/const";

const initialState = {
  token: {},
  data: {},
  loading: false,
  error: false,
  login:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true, data: action.payload};
    case USER_LOGIN_SUCCEED:
      return { ...state, loading: false, token: action.payload, data: {}, login:true };
    case USER_SAVE_DATA:
      return {...state, data: action.payload}
    case USER_UNLOGIN:
      return { ...state, token: action.payload, login:false };
    case USER_LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { loginReducer };