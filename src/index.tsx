import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from "./services/user.context";

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <UserProvider>
        <App />
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();

reportWebVitals();
