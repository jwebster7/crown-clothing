import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// used for setting up local storage
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

const middlewares = [thunk];

// if the app is in a development environment, setup the redux logger as middleWare when the primary store is created.
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// persistor does the work of storing the app store in local storage
export const persistor = persistStore(store);

const persistedStore = {
  store,
  persistor
};

export default persistedStore;
