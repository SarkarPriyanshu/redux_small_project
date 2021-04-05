import { createStore, combineReducers } from "redux";
import { Register, Login_ } from "./Reducers";

const Authentication = combineReducers({
  Register: Register,
  Login: Login_
});

const store = createStore(Authentication);

export default store;
