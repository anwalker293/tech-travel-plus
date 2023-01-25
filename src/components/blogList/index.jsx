import React from "react";
import "./styles.css";
import BlogItem from "./blogItem/index.jsx";

const BlogList = ({ blogs }) => {
  <div className="blogList-wrap">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>;
};

export default BlogList;
