import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from './componentes/Header'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
