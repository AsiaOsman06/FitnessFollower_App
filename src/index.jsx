import React from 'react';
import ReactDOM from 'react-dom/client';
// it allowing as the global state to interct with react
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    {/* //Kick off everything get registered here */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
