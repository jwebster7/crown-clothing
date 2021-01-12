import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// used for setting up local storage
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// persistor does the work of storing the app store in local storage
export const persistor = persistStore(store);

const persistedStore = {
  store,
  persistor
};

export default persistedStore;
