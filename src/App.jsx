import React from "react";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route index element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
