import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import "./global.css";
import App from "./App.jsx";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://us-west-2.cdn.hygraph.com/content/cma5bvoyi016q06w8ze6zpduv/master",
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
