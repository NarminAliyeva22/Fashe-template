import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Footer } from "./Features";
import { PRODUCTS, OCCASIONS, MIN_PRICE, MAX_PRICE } from "./productsData";
import "./Find.css";

const HERO_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";
const PER_PAGE = 10;

function Widget({ title, children }) {
  return (
    <section className="widget">
      <h4 className="w-title"><span>{title}</span></h4>
      <div className="w-body">{children}</div>
    </section>
  );
}

export default function Find() {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("latest");
  const [occasion, setOccasion] = useState("");
  const [draft, setDraft] = useState([MIN_PRICE, MAX_PRICE]);
  const [range, setRange] = useState([MIN_PRICE, MAX_PRICE]);

  const list = useMemo(() => {
    const r = PRODUCTS.filter(
      (p) =>
        (!occasion || p.occasions.includes(occasion)) &&
        p.from <= range[1] &&
        p.to >= range[0]
    );
    if (sort === "low") r.sort((a, b) => a.from - b.from);
    if (sort === "high") r.sort((a, b) => b.from - a.from);
    if (sort === "name") r.sort((a, b) => a.name.localeCompare(b.name));
    return r;
  }, [occasion, range, sort]);

  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const current = Math.min(page, pages);
  const items = list.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const topRated = PRODUCTS.filter((p) => p.rating > 0).slice(0, 3);

  const go = (n) => { setPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${HERO_IMG})` }}
      >
        <h1>Shop</h1>
        <p className="crumbs"><Link to="/">Home</Link><i>|</i><span>Shop</span></p>
      </section>

      <div className="shop">
        <aside className="sidebar">
          <Widget title="Cart"><p className="empty">No products in the cart.</p></Widget>

          <Widget title="Occasions">
            <ul className="occ">
              {OCCASIONS.map((o) => (
                <li key={o}>
                  <button
                    className={o === occasion ? "on" : ""}
                    onClick={() => { setOccasion(o === occasion ? "" : o); setPage(1); }}
                  >
                    {o}
                  </button>
                </li>
              ))}
            </ul>
          </Widget>

          <Widget title="Price filter">
            <input type="range" min={MIN_PRICE} max={MAX_PRICE} value={draft[0]}
              onChange={(e) => setDraft([Math.min(+e.target.value, draft[1]), draft[1]])} />
            <input type="range" min={MIN_PRICE} max={MAX_PRICE} value={draft[1]}
              onChange={(e) => setDraft([draft[0], Math.max(+e.target.value, draft[0])])} />
            <div className="price-row">
              <span>Price: <b>${draft[0]} – ${draft[1]}</b></span>
              <button className="btn-s" onClick={() => { setRange(draft); setPage(1); }}>Filter</button>
            </div>
          </Widget>

          <Widget title="Top rated products">
            <ul className="top">
              {topRated.map((p) => (
                <li key={p.id}>
                  <Link to={`/product/${p.id}`} className="t-img"
                    style={p.img ? { backgroundImage: `url(${p.img})` } : undefined} />
                  <div>
                    <Link to={`/product/${p.id}`}>{p.name}</Link>
                    <div className="stars">{"★".repeat(p.rating)}</div>
                    <span>${p.from} – ${p.to}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Widget>
        </aside>

        <main className="main">
          <div className="toolbar">
            <div className="view">
              <button className={view === "grid" ? "on" : ""} onClick={() => setView("grid")} aria-label="Grid">▦</button>
              <button className={view === "list" ? "on" : ""} onClick={() => setView("list")} aria-label="List">☰</button>
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="latest">Sort by latest</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="name">Name</option>
            </select>
          </div>

          {items.length === 0 ? (
            <p className="empty">Heç nə tapılmadı.</p>
          ) : (
            <div className={`products ${view}`}>
              {items.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          )}

          {pages > 1 && (
            <div className="pager">
              {current > 1 && <button onClick={() => go(current - 1)}>‹</button>}
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button key={n} className={n === current ? "on" : ""} onClick={() => go(n)}>{n}</button>
              ))}
              {current < pages && <button onClick={() => go(current + 1)}>›</button>}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}