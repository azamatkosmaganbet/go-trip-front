import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { Context, store } from './store/context';


const rootElement = document.getElementById("root")!;


const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Context.Provider value={{ store }}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </Context.Provider>
);

