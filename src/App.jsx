import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Layout from "./Components/LayOut/Layout";
import BlogPage from "./Components/Blog/BlogPage";
import AuthorPage from "./Components/author/AuthorPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
