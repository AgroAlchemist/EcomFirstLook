import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./assets/Header.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <Header />
      <App />
    </ChakraProvider>
  </StrictMode>
);
