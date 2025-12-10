// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Blogs from "./pages/Blogs";
import Poetry from "./pages/Poetry";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
            <Route path="/blogs" element={<Blogs />} />
          <Route path="/poetry" element={<Poetry />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
