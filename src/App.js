import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";
import { RestLink } from "apollo-link-rest";
import customClientApi from './customClient';

import Routes from "./Routes";
import ModalRoot from "./components/Modal/ModalRoot";
import { ModalProvider } from "./components/Modal/ModalContext";
import { FilterProvider } from "./components/FilterContext";

const client = new ApolloClient({
  uri: "https://smart-gov-api.herokuapp.com/graphql-auth"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalProvider>
          <FilterProvider>
            <ModalRoot />
            <Routes />
          </FilterProvider>
        </ModalProvider>
      </div>
    );
  }
}

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
