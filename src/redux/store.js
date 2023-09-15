

import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  storage,
};



export const store = configureStore({  
  reducer: {
    contacts: contactReducer,
  }
});


