import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Rent from "./pages/Rent";
import Occasions from "./pages/Occasions";
import OccasionDetail from "./pages/OccasionDetail";
import Features from "./pages/Features";
import WhatsNew from "./pages/WhatsNew";
import Post from "./pages/Post";
import Find from "./pages/Find";
import Product from "./pages/Product";
import ServiceDetail from "./pages/ServiceDetail";

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/occasions/:slug" element={<OccasionDetail />} />
        <Route path="/find" element={<Find />} />
        <Route path="/features" element={<Features />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;