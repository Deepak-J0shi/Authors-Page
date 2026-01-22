import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Blogs from "./pages/Blogs";
import Poetry from "./pages/Poetry";
import BlogDetail from "./pages/BlogDetail";
import PoemDetail from "./pages/PoemDetail";
import BookDetail from "./pages/BookDetail";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


function NotFound() {
  return (
    <>
      {/* Prevent indexing of invalid routes */}
      <meta name="robots" content="noindex" />
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-sm opacity-70">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
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
            <Route path="/books/:id" element={<BookDetail />} />

            <Route path="/contact" element={<Contact />} />

            {/* SEO-safe fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
