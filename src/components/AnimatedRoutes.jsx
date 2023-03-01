import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "../pages/blog/index";
import Home from "../pages/home/index.jsx";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
