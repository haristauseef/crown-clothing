import { createStore,applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);