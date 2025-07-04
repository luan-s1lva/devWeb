import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AdminPage from "./components/admin/index.jsx";
import SobrePage from "./components/sobre/index.jsx";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/sobre" element={<SobrePage />} />
    </Routes>
  </BrowserRouter>,
);
