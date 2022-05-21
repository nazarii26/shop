import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { itemsReducer } from "./reducers/reducersItem";

const rootReducer = combineReducers({
  itemsList: itemsReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
