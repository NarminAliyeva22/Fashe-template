import { Link } from "react-router-dom";
import "./PhotoLink.css";

export default function PhotoLink({ post, className = "" }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className={`photo-link ${className}`}
      style={post.img ? { backgroundImage: `url(${post.img})` } : undefined}
      aria-label={post.title}
    >
      <span className="photo-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </span>
    </Link>
  );
}