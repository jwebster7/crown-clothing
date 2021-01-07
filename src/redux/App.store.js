import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [logger];

const AppStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default AppStore;
