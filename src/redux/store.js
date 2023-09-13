import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReduser } from "./reducer";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}


const enhancer = devToolsEnhancer();
const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = createStore(persistedReducer, enhancer); 
export const persistor = persistStore(store);
