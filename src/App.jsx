import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./views/DashBoard/DashBoard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
