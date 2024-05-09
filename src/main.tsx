import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { Context, store } from "./store/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root")!;

const queryClient = new QueryClient();
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Context.Provider value={{ store }}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </Context.Provider>
);
