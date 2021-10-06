import { createStore, applyMiddleware } from "redux";
//import reducers from "../src/reducer/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "../src/reducer";
const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import reducers from "../src/reducer/counterReducer";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   reducers,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
