import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import AuthModal from "../AuthModal/AuthModal";

export const Nav = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // DƏYİŞDİ: mobil menyu vəziyyəti

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-main">your</span>
        <span className="logo-sub">
          <i></i>DRESS
        </span>
      </Link>

      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/rent" onClick={closeMenu}>Rent a Dress</Link>
        <Link to="/find" onClick={closeMenu}>Find a Dress</Link>
        <Link to="/occasions" onClick={closeMenu}>Occasions</Link>
        <Link to="/whats-new" className="accent" onClick={closeMenu}>What's New</Link>
        <Link to="/features" className="accent" onClick={closeMenu}>Features</Link>
        <Link to="/contact" onClick={closeMenu}>Contacts</Link>
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

      
      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
};