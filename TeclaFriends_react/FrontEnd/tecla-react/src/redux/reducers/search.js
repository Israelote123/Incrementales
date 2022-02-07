import {SEARCH_USER, SEARCHED_USER, SEARCH_USER_ERROR, SEARCHING_USER} from "../actions/const";

const initialState = {
    users: [],
    searching: false,
    error: false,
    dataSearch: {}
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_USER:
        return { ...state, users: action.payload, searching: false};
      case SEARCHING_USER:
        return { ...state, users: action.payload, searching: true};
      case SEARCHED_USER:
        return { ...state, users: [], searching:false, dataSearch: action.payload};
      case SEARCH_USER_ERROR:
        return {...state, error: true}
      default:
        return state;
    }
  };
  
  export { searchReducer };