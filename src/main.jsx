import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@mui/material";

import theme from "./mui/theme.js";
import App from "./App.jsx";

import "./styles/index.css";
import "./styles/font.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://us-west-2.cdn.hygraph.com/content/cma5bvoyi016q06w8ze6zpduv/master",
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
