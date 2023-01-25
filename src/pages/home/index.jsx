import Header from "../../components/header/index.jsx";
import SearchBar from "../../components/search-bar/index.jsx";
import BlogList from "../../components/blogList/index.jsx";
import { blogList } from "../../config/data.js";

const Home = () => {
  const [blog, setBlogs] = useState(initialState);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  // Search for blogs by category
  const handleSearchSubmit = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
