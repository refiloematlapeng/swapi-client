import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom';
import './styles/index.css';
import React from 'react';
import App from './App';
import {
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  ApolloClient
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT || 'https://ngu3u.sse.codesandbox.io/',
}) as any

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
document.title = 'Sovtech | Fullstack Engineer';
