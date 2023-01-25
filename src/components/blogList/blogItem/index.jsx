import React from "react";
import "./styles.css";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="cover" />
    </div>
  );
};

export default BlogItem;
