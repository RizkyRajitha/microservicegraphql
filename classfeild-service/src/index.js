import React from "react";
import "@babel/polyfill";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import Home from "./pages/home";
import graphqlclient from "./components/api/graphqlclient";
import { Provider } from "react-redux";
import * as theme from "./theme";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;

render(
  <Provider store={store}>
    <ApolloProvider client={graphqlclient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> <Home />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
