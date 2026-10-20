import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import AuthModal from "../AuthModal/AuthModal";

export const Nav = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        <span className="logo-main">your</span>
        <span className="logo-sub">
          <i></i>DRESS
        </span>
      </Link>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/rent">Rent a Dress</Link>
        <Link to="/find">Find a Dress</Link>
        <Link to="/occasions">Occasions</Link>
        <Link to="/whats-new" className="accent">Whats New</Link>
        <Link to="/features" className="accent">Features</Link>
        <Link to="/contact">Contacts</Link>
      </div>

      <div className="paputu">
        <button type="button" className="signin" onClick={() => setAuthOpen(true)}>
          Sign in
        </button>
        <button className="bag" aria-label="Cart">
          <ShoppingBag size={22} strokeWidth={1.5} />
          <span className="badge">0</span>
        </button>
        <button aria-label="Search">
          <Search size={20} strokeWidth={1.8} />
        </button>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
};