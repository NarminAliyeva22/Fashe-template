import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Footer } from "./Features";
import { PRODUCTS } from "./productsData";
import "./Product.css";

const HERO_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";

const COLORS = [
  { name: "Black", hex: "#000" },
  { name: "White", hex: "#fff" },
  { name: "Pink", hex: "#e0558f" },
];
const SIZES = ["XS", "S", "M", "L", "XL"];

function Hero({ title, crumbs }) {
  return (
    <section
      className="pd-hero"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${HERO_IMG})` }}
    >
      <h1>{title}</h1>
      <p>
        {crumbs.map((c, i) => (
          <span key={i}>
            {i > 0 && <i>|</i>}
            {c.to ? <Link to={c.to}>{c.label}</Link> : <b>{c.label}</b>}
          </span>
        ))}
      </p>
    </section>
  );
}

export default function Product() {
  const { id } = useParams();
  const p = PRODUCTS.find((x) => String(x.id) === id);

  const [active, setActive] = useState(0);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(0); setSize(""); setColor(""); setQty(1); setMsg(""); setTab("desc");
  }, [id]);

  if (!p) {
    return (
      <>
        <Hero title="Not found" crumbs={[{ label: "Home", to: "/" }, { label: "Shop", to: "/find" }]} />
        <div className="pd-wrap"><h2>Məhsul tapılmadı</h2><Link to="/find">← Geri qayıt</Link></div>
        <Footer />
      </>
    );
  }

  const related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);
  const buy = () => {
    if (!size) return setMsg("Zəhmət olmasa ölçü seçin.");
    setMsg(`${qty} × ${p.name} (${size}${color ? ", " + color : ""}) səbətə əlavə olundu.`);
  };

  return (
    <>
      <Hero
        title={p.name}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/find" },
          { label: "…", to: "/find" },
          { label: p.name },
        ]}
      />

      <div className="pd-wrap">
        <div className="pd-top">
          <div className="gallery">
            <div className="g-main"
              style={p.imgs[active] ? { backgroundImage: `url(${p.imgs[active]})` } : undefined} />
            <div className="g-thumbs">
              {p.imgs.map((src, i) => (
                <button key={i} className={i === active ? "on" : ""} onClick={() => setActive(i)}
                  style={src ? { backgroundImage: `url(${src})` } : undefined} aria-label={`Şəkil ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="pd-info">
            <p className="pd-price">${p.from}{p.to > p.from && ` – $${p.to}`}</p>
            <p>Lorem ipsum dolor sit amet, populo doming ne duo, pro in soleat persius corpora. Id summo aeque eum, ut sea essent expetendis. Eu quo quas ipsum doctus, ei prompta forensibus sit. Mea decore appetere urbanitas eu, per eu.</p>
            <p>Dicta mediocrem consetetur cu vis, id regione aliquam has. Ei iriure inimicus nec. Qui eu quod philosophia, sanctus habemus modera.</p>
            <p className="specs">
              <b>BUST:</b> Great for any cup size – comfortable room at bust<br />
              <b>WAIST:</b> Very Fitted – dress very fitted at natural waist<br />
              <b>HIPS:</b> Fitted – stretchy fabric at hips<br />
              <b>LENGTH:</b> Knee length – (on a 5'6" model)
            </p>
            <p className="specs">
              <b>UNDERGARMENTS:</b> Should be worn with a nubra or no bra.<br />
              <b>FABRIC:</b> Fabric is very stretchy<br />
              <b>GREAT FOR:</b> Athletic, Full Bust, Petite, Straight &amp; Narrow body types (Model’s height is 5’10”)
            </p>

            <label className="lbl">Size</label>
            <select value={size} onChange={(e) => { setSize(e.target.value); setMsg(""); }}>
              <option value="">Choose an option</option>
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>

            <label className="lbl">Color</label>
            <div className="colors">
              {COLORS.map((c) => (
                <button key={c.name} title={c.name} className={color === c.name ? "on" : ""}
                  style={{ background: c.hex }} onClick={() => setColor(c.name)} aria-label={c.name} />
              ))}
            </div>

            <div className="buy-row">
              <div className="qty">
                <input type="number" min="1" value={qty}
                  onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} />
              </div>
              <button className="buy" onClick={buy}>Buy now</button>
            </div>
            {msg && <p className="msg">{msg}</p>}
            <p className="wish">♡ Add to Wishlist</p>
          </div>
        </div>

        <div className="tabs">
          <button className={tab === "desc" ? "on" : ""} onClick={() => setTab("desc")}>Description</button>
          <button className={tab === "info" ? "on" : ""} onClick={() => setTab("info")}>Additional information</button>
          <button className={tab === "rev" ? "on" : ""} onClick={() => setTab("rev")}>Reviews (0)</button>
        </div>
        <div className="tab-body">
          {tab === "desc" && <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.</p>}
          {tab === "info" && <p><b>Size:</b> {SIZES.join(", ")}<br /><b>Color:</b> {COLORS.map((c) => c.name).join(", ")}</p>}
          {tab === "rev" && <p>There are no reviews yet.</p>}
        </div>

        <h2 className="rel-title">Related products</h2>
        <div className="rel-grid">
          {related.map((r) => <ProductCard key={r.id} p={r} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}