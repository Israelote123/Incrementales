import { createStore, combineReducers, applyMiddleware, compose,} from "redux";
import  createSagaMiddleware  from "redux-saga";
import { courseReducer } from "../reducers/curso";
import {themeReducer} from "../reducers/theme";
import {requestReducer} from "../reducers/request";

import { rootSaga } from "../sagas/index";

const sagaMiddleware=createSagaMiddleware();

const reducers = combineReducers({
  themeReducer,
  courseReducer,
  requestReducer,


});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatchig", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};



const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)
    
  )
);
sagaMiddleware.run(rootSaga);

export { store };