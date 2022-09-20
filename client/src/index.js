import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {applyMiddleware,compose,legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import * as ReactDOMClient from 'react-dom/client'
import {BrowserView, MobileView} from 'react-device-detect'
import MobilePage from './components/MobilePage';

//Redux Dev Tools Connection
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux Global Store
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

//Main Rendering Component
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <div>
  <BrowserView>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserView>
  <MobileView>
    <MobilePage/>
  </MobileView>
  </div>
);
