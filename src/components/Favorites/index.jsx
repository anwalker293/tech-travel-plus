import "./styles.css";
import "../header/styles.css";
import React, { useState } from "react";
import BlogItem from "../blogList/blogItem/index.jsx";
import { productList } from "./config/data";
import BlogList from "../blogList/index.jsx";
import EmptyList from "../../components/common/emptyList/index.jsx";

const Favorites = (props) => {
  const [products, setProducts] = useState(productList);

  return (
    <div>
      <header className="home-header">
        <h1>
          <br />
          <div className="header-text">Favorites</div>
          <br />
        </h1>
      </header>
      {!products.length ? <EmptyList /> : <BlogList blogs={products} />}{" "}
    </div>
  );
};

export default Favorites;
