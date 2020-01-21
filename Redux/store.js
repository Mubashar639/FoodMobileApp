import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Login from "./Reducers/Login";
import Facility from "./Reducers/facility";
import Transport from "./Reducers/transport";
import Foods from "./Reducers/foods";
import Order from "./Reducers/order";
import Category from "./Reducers/categoryReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    Login,
    Facility,
    Transport,
    Foods,
    Order,
    Category
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
