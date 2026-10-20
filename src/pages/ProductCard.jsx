import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ p }) {
  const to = `/product/${p.id}`;
  return (
    <div className="pcard">
      <Link
        to={to}
        className="pimg"
        style={p.img ? { backgroundImage: `url(${p.img})` } : undefined}
        aria-label={p.name}
      >
        <span className="phover">
          <i>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </i>
          <b>Rent a dress</b>
        </span>
      </Link>
      <div className="pinfo">
        <h3><Link to={to}>{p.name}</Link></h3>
        {p.rating > 0 && <div className="stars">{"★".repeat(p.rating)}</div>}
        <p className="price"><small>from</small> ${p.from}</p>
      </div>
    </div>
  );
}