import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UtillsProvider } from "./context/UtillsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UtillsProvider>
      <App />
    </UtillsProvider>
  </StrictMode>,
);
