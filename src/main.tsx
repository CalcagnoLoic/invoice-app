import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

import "../public/assets/style/tailwind.css";

import Error404 from "./pages/Error404";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/invoice-app-web" element={<Homepage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </React.StrictMode>,
);
