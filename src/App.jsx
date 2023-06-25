import React from "react";
import "./App.css";
import Blog from "./pages/blog/index";
import Home from "./pages/home/index.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/index.jsx";
import NavItem from "./components/Navbar/NavItem.jsx";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import DropdownMenu from "./components/Navbar/DropdownMenu.jsx";
import Favorites from "./components/Favorites/index.jsx";

const App = () => {
  return (
    <div className="container">
      <NavBar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/favs" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
