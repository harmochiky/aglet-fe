import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import Header from "./component/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <Routes>
      <Header />
      <AppRoutes />
    </Routes>
  );
}

export default App;
