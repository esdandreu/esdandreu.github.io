import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import {combineReducers} from 'redux'

// import headerReducer from "./modules/header"

// const rootReducer = combineReducers({
//     headerReducer
// });

const store = createStore(
  // rootReducer,
  applyMiddleware(thunk),
);

export default store;
