import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Address from "./pages/Address/Address";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import News from "./pages/News/News";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<News />}></Route>
        <Route path="address" element={<Address />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
