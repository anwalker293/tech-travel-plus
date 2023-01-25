import Header from "../../components/header/index.jsx";
import SearchBar from "../../components/search-bar/index.jsx";
import BlogList from "../../components/blogList/index.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BlogList blogs={} />
    </div>
  );
};

export default Home;
