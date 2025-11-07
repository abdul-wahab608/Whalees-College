import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import LifeAtWhales from "./pages/LifeAtWhales";
import CCSP from "./pages/CCSP";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import Alumni from "./pages/Alumni";
import Interviews from "./pages/Interviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/life-at-whales" element={<LifeAtWhales />} />
      <Route path="/ccsp" element={<CCSP />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
