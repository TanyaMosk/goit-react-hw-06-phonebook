import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
     <PersistGate loading={null} persistor={persistor}>  
        <App />      
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
