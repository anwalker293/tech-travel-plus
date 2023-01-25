import React from "react";
import "./App.css";
import Blog from "./pages/blog/index";
import Home from "./pages/home/index.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
