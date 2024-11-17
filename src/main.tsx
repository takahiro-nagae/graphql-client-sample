import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

const client = new Client({
  url: "http://localhost:4000",
  exchanges: [cacheExchange, fetchExchange],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
