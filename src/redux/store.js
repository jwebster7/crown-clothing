import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// used for setting up local storage
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

// thunk allows the redux store to dispatch functions, not just actions.
// const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if the app is in a development environment, setup the redux logger as middleWare when the primary store is created.
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// persistor does the work of storing the app store in local storage
export const persistor = persistStore(store);

const persistedStore = {
  store,
  persistor
};

export default persistedStore;
