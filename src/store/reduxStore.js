import { createStore } from "redux";
import heroesReducer from "./reducers/heroesReducers";
// import { createStore } from "redux";

const store = createStore(heroesReducer);

window.store = store;

export default store;
