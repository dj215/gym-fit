import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import createReducer from "./reducers";


const persistConfig = {
    key: "root",
    storage,
    blacklist: ["scrumboard", "themeSetting", "LanguageSwitcher", "themeChanger"],
    stateReconciler: autoMergeLevel2
  };

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);
  
export { store, history, persistor };