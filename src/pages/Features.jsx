import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PhotoLink from "./PhotoLink";
import { ALL_POSTS } from "./postsData";
import "./Features.css";

const HERO_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";

const PER_PAGE = 10;
const TOTAL_PAGES = Math.ceil(ALL_POSTS.length / PER_PAGE);

function Hero({ title, img }) {
  return (
    <section
      className="hero"
      style={
        img
          ? { backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${img})` }
          : undefined
      }
    >
      <h1>{title}</h1>
      <p className="crumbs">
        <a href="/">Home</a><i>|</i><a href="/posts">All Posts</a><i>|</i>
        <span>{title}</span>
      </p>
    </section>
  );
}

function PostGrid({ items }) {
  return (
    <section className="grid">
      {items.map((p, i) => {
        const textFirst = Math.floor(i / 2) % 2 === 0;
        const text = (
          <article className="cell text">
            <h2>{p.title}</h2>
            <p>{p.text}</p>
            <Link className="btn" to={`/post/${p.id}`}>Read more</Link>
          </article>
        );
        const img = <PhotoLink post={p} className="cell photo" />;
        return (
          <Fragment key={p.id}>
            {textFirst ? <>{text}{img}</> : <>{img}{text}</>}
          </Fragment>
        );
      })}
    </section>
  );
}

function Pagination({ page, total, onChange }) {
  return (
    <div className="pager">
      {page > 1 && <button onClick={() => onChange(page - 1)}>‹</button>}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button key={n} className={n === page ? "on" : ""} onClick={() => onChange(n)}>
          {n}
        </button>
      ))}
      {page < total && <button onClick={() => onChange(page + 1)}>›</button>}
    </div>
  );
}

export function Footer() {
  const cols = {
    "Hire Dresses": ["Evening Dress", "Prom Dress", "Wedding Guest Dress", "Cocktail Dress Hire", "Party Dress Hire", "Birthday Party Dress Hire"],
    "Customer Care": ["Contact Us", "How it Works", "FAQs", "Advanced Try On Service", "Size Chart", "Delivery Information"],
    "About Us": ["About Us", "We're Hiring", "Rental Agreement", "Student Discount"],
  };
  return (
    <footer className="footer">
      <div className="footer-cols">
        {Object.entries(cols).map(([h, links]) => (
          <div key={h}>
            <h3>{h}</h3>
            <ul>{links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
        <div>
          <h3>Stay Connected</h3>
          <div className="social">
            {["X", "Bē", "f", "ig", "dr"].map((s) => <a key={s} href="#">{s}</a>)}
          </div>
        </div>
      </div>
      <p className="copy">AncoraThemes ©️ 2026. All Rights Reserved.</p>
    </footer>
  );
}

export default function Features() {
  const [page, setPage] = useState(1);
  const go = (n) => { setPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const items = ALL_POSTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <Hero title="Popular" img={HERO_IMG} />
      <PostGrid items={items} />
      <Pagination page={page} total={TOTAL_PAGES} onChange={go} />
      <Footer />
    </>
  );
}