import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../public/assets/style/tailwind.css";
import Homepage from "./pages/Homepage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/invoice-app" element={<Homepage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
