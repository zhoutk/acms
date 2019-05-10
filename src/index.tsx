import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient  } from 'apollo-client'
import { ApolloLink, NextLink, Observable, Operation } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';
// import { onError } from 'apollo-link-error';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo'
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App';
import List from './components/list'

import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

// 请求拦截器
const request = async (operation: Operation) => {
  // 可以设置token
  operation.setContext({
    headers: {}
  })
  return Promise.resolve()
}

const requestLink = new ApolloLink((operation: Operation, forward: NextLink) => {
  return new Observable(observer => {
    let handle: any;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));
      
      return () => {
        if (handle) {
          handle.unsubscribe()
        }
      }

  })
}) 

const client = new ApolloClient({
  link: ApolloLink.from([
    // onError(({ graphQLErrors }) => {
    //   // 全局错误处理
    //   if (Array.isArray(graphQLErrors)) {
    //     message.error(graphQLErrors[0].message)
    //   }
    // }),
    requestLink,
    new BatchHttpLink({ uri: process.env.REACT_APP_SERVER_URL }),
  ]),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <CssBaseline/>
    <Router history={hist}>
      <App />
    </Router>
  </ApolloProvider>,

  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
