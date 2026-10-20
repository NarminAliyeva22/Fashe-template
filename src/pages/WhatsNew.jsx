import { Fragment, useState } from "react";
import "./WhatsNew.css";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat…";

const HERO_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";

const PAGES = {
  1: [
    "15 Easy And Stylish Casual Summer Outfits",
    "Wedding Fashion, Beauty & Style Ideas",
    "How To Pick The Right Handbag For Lifestyle",
    "How to Find Affordable Bridesmaid Dresses",
    "Why You Should Wear Interesting Accessories",
    "The Little Black Dress – The Fashion Historian",
    "The New Shoes Are Sure to Make You Smile",
    "Celebrity Style and Fashion Trend Coverage",
    "9 Ways to Make Your Clothes Look More Expensive",
    "Top 10 Best Fashion Designers of All Time",
  ],
  2: ["The Best-Dressed Celebrities of the Week", "The 8 Best Look-Pretty Tips Ever"],
};


const IMAGES = {
  1: [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-1-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-3-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-5-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-6-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-7-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-8-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-9-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-10-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-11-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-12-1155x615.jpg",
  ],
  2: [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-2-1155x615.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-13-1155x615.jpg",],
};

const posts = (page) =>
  PAGES[page].map((title, i) => ({
    id: `${page}-${i}`,
    title,
    text: LOREM,
    img: IMAGES[page][i] || "",
  }));


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
            <a className="btn" href="#">Read more</a>
          </article>
        );
        const img = (
          <div
            className="cell photo"
            style={p.img ? { backgroundImage: `url(${p.img})` } : undefined}
            role="img"
            aria-label={p.title}
          />
        );
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


function Footer() {
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

  return (
    <>
      <Hero title="Popular" img={HERO_IMG} />
      <PostGrid items={posts(page)} />
      <Pagination page={page} total={2} onChange={go} />
      <Footer />
    </>
  );
}