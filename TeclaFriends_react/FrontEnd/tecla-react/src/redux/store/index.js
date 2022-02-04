import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {themeReducer} from "../reducers/theme";
import {loginReducer} from "../reducers/login";
import { rootSaga } from "../sagas/";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  themeReducer, 
  loginReducer
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatchig", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
    reduxDevTools
  )
);

sagaMiddleware.run(rootSaga)

export { store };