import { createStore, combineReducers } from "redux";
import {themeReducer} from "../reducers/theme";

const reducers = combineReducers({
  themeReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };