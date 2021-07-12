import { createStore, applyMiddleware} from "redux";
import { batch } from "react-redux";
import { combinedReducers } from "redux/combinedReducers";

const batchActions = ({dispatch}) => next => action => {
  return Array.isArray(action) ? batch(() => action.map(dispatch)) : next(action);
}

const batchCreateStore = applyMiddleware(
  batchActions,
)(createStore);

const store = batchCreateStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
  store
}