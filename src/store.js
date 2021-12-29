import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import apiReducer from "./Reducers/apiReducer";
import selectedReducer from "./Reducers/selectedReducer"
import loginReducer from "./Reducers/loginReducer";
import watchFetchApi from "./Sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  apiReducer,
  selectedReducer,
  loginReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watchFetchApi)

export default store