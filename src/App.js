import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Naslovnica from "./pages/Naslovnica";
import Blog from "./pages/Blog";
import Onama from "./pages/O nama";
import Proizvodi from "./pages/Proizvodi";
import Kosarica from "./pages/Kosarica";
import BlogSingle from "./pages/BlogSingle";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="blogsingle" element={<BlogSingle />} />
        <Route path="/kosarica" element={<Kosarica />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
