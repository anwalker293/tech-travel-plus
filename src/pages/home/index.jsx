import React, { useState } from "react";
import EmptyList from "../../components/common/emptyList/index.jsx";
import BlogList from "../../components/blogList/index.jsx";
import Header from "../../components/header/index.jsx";
import SearchBar from "../../components/search-bar/index.jsx";
import { blogList } from "../../config/data";
import Slider from "../../components/Slider/index.jsx";
import logo from "../../images/tech-travel/logo-optimize.png";
import logoRight from "../../images/tech-travel/logo-full-wo-background-optimize.png";
import "./styles.css";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <img src={logoRight} className="logo-right" alt="" />
      <Slider />
      <img src={logo} className="logo" alt="" />

      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
