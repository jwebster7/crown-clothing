import { combineReducers } from "redux";

// adding these for local storage
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
