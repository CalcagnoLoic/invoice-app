import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ItemsProvider } from "./context/ItemsContext";

import "../public/assets/style/tailwind.css";

import Details from "./pages/Details";
import EditInvoice from "./pages/EditInvoice";
import Error404 from "./pages/Error404";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import NewInvoice from "./pages/NewInvoice";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ItemsProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/invoice-app-web" element={<Homepage />} />
            <Route path="/invoice-app-web/:id" element={<Details />} />

            <Route
              path="/invoice-app-web/new-invoice"
              element={<NewInvoice />}
            />
            <Route
              path="/invoice-app-web/edit-invoice/:id"
              element={<EditInvoice />}
            />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
