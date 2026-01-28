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
import Kontakt from"./pages/Kontakt";

import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici";
import Tecaj from "./components/zadaci/Tecaj";
import Kategorije from "./pages/Kategorije";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogSingle />} />
        <Route path="/kosarica" element={<Kosarica />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kategorije" element={<Kategorije />} />
    


      <Route path="/profil" element= {<Profil />} />
      <Route path="/korisnici" element= {<Korisnici />} />
      <Route path="/tecaj" element= {<Tecaj />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
