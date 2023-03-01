import React, { useState, useEffect } from "react";
import EmptyList from "../../components/common/emptyList/index.jsx";
import BlogList from "../../components/blogList/index.jsx";
import Header from "../../components/header/index.jsx";
import SearchBar from "../../components/search-bar/index.jsx";
import { blogList } from "../../config/data";
import Slider from "../../components/Slider/index.jsx";
import logo from "../../images/tech-travel/logo-optimize.png";
import logoRight from "../../images/tech-travel/logo-full-wo-background-optimize.png";
import Preloader from "../../components/preloader/preloader.jsx";
import "./styles.css";
import "../../App.css";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const [loader, setLoader] = useState(true);

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

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(function () {
        //your code here
        setLoader(false);
      }, 3000);
    };
  }, []);

  return (
    <div>
      {loader ? (
        <Preloader />
      ) : (
        <div class="container" onLoad={setLoader(false)}>
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
      )}
    </div>
  );
};

export default Home;
