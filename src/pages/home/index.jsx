import Header from "../../components/header/index.jsx";
import SearchBar from "../../components/search-bar/index.jsx";
import BlogList from "../../components/blogList/index.jsx";
import { blogList } from "../../config/data.js";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
