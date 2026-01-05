
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Blogs from "./pages/Blogs";
import Poetry from "./pages/Poetry";
import BlogDetail from "./pages/BlogDetail";
import PoemDetail from "./pages/PoemDetail";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/poetry/:slug" element={<PoemDetail />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
