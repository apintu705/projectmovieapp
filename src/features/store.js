import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailsreducer, moviereducer, showreducer } from "./redux/reducer";

const reducer = combineReducers({
  movies: moviereducer,
  shows: showreducer,
  details: detailsreducer
});

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
