import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import './index.css';
import App from './App';
import apolloClient from './apollo-client'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));

serviceWorker.unregister();
