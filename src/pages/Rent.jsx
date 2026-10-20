import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shirt, Heart, Gem, Gift, ArrowRight, MessageCircle, Link as LinkIcon } from "lucide-react";
import "./Rent.css";

const IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/";

const STATS = [
  { id: 1, end: 2208, label: "Dresses were rent", Icon: Shirt },
  { id: 2, end: 1499, label: "Satisfied clients", Icon: Heart },
  { id: 3, end: 105, label: "Fashion designers", Icon: Gem },
  { id: 4, end: 300, label: "Arrivals every month", Icon: Gift },
];

const OCCASIONS = [
  { id: 1, title: "Date Night", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing.", image: `${IMG}image-6-1155x615.jpg` },
  { id: 2, title: "Gala", text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.", image: `${IMG}image-7-1155x615.jpg` },
  { id: 3, title: "Mardi Gras", text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.", image: `${IMG}image-3-1155x615.jpg` },
  { id: 4, title: "Prom", text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.", image: `${IMG}image-5-1155x615.jpg` },
  { id: 5, title: "Valentine’s Day", text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation.", image: `${IMG}image-15-1155x615.jpg` },
  { id: 6, title: "Wedding", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing.", image: `${IMG}service-9-440x750.jpg` },
];

const FAQS = [
  { q: "How does YourDress work?", a: "Browse our collection, choose your favorite dress and select your rental dates. Complete your booking and get ready for your special occasion." },
  { q: "How to rent a dress?", a: "Choose a dress from our collection, select your preferred rental period and follow the booking instructions to reserve it." },
  { q: "How are the dresses cleaned?", a: "Every dress is professionally cleaned and carefully inspected after each rental to help ensure it is ready for the next customer." },
];


const DRESSES = [
  { id: 1, name: "Occasion Dress", price: 120, image: `${IMG}img12_01.jpg` },
  { id: 2, name: "White Dress", price: 90, image: `${IMG}img01_02.jpg` },
  { id: 3, name: "Skinny Dress", price: 100, rating: 5, image: `${IMG}img11_01.jpg` },
  { id: 4, name: "Maxi Dress", price: 50, image: `${IMG}img10_01.jpg` },
  { id: 5, name: "Oversized Dress", price: 20, image: `${IMG}img03_01.jpg` },
  { id: 6, name: "Cocktail Dress", price: 100, image: `${IMG}img02_01.jpg` },
  { id: 7, name: "Zoe Dress", price: 20, image: `${IMG}img05_01.jpg` },
  { id: 8, name: "Multiway Dress", price: 100, image: `${IMG}img04_01.jpg` },
];

const FOOTER_COLS = [
  { title: "Hire Dresses", links: ["Evening Dress", "Prom Dress", "Wedding Guest Dress", "Cocktail Dress Hire", "Party Dress Hire", "Birthday Party Dress Hire"] },
  { title: "Customer Care", links: ["Contact Us", "How it Works", "FAQs", "Advanced Try On Service", "Size Chart", "Delivery Information"] },
  { title: "About Us", links: ["About Us", "We’re Hiring", "Rental Agreement", "Student Discount"] },
];

const SOCIALS = [
  { id: 1, label: "X", name: "X" },
  { id: 2, label: "Bē", name: "Behance" },
  { id: 3, label: "f", name: "Facebook" },
  { id: 4, label: "In", name: "Instagram" },
  { id: 5, label: "Dr", name: "Dribbble" },
];


function CountUp({ end, start, duration = 1800 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return <>{val}</>;
}

export default function Rent() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [statsSeen, setStatsSeen] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setStatsSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="rent-container">
      
      <section className="rent-hero">
        <div className="hero-overlay">
          <h2>Rent a Dress</h2>
          <div className="breadcrumb">
            <Link to="/">HOME</Link> <span>|</span> RENT A DRESS
          </div>
        </div>
      </section>

      
      <section ref={statsRef} className={`stats-section ${statsSeen ? "seen" : ""}`}>
        {STATS.map(({ id, end, label, Icon }, i) => (
          <div key={id} className="stat-card" style={{ transitionDelay: `${i * 130}ms` }}>
            <div className="stat-icon-wrapper">
              <Icon size={42} strokeWidth={1.2} />
            </div>
            <div className="stat-text-wrapper">
              <div className="stat-number">
                <CountUp end={end} start={statsSeen} />
              </div>
              <div className="stat-label">{label}</div>
            </div>
          </div>
        ))}
      </section>

      
      <section className="occasions-section">
        <div className="section-header">
          <p className="sub-title">RENT A DRESS</p>
          <h2 className="main-title">Choose Your<br />Occasion</h2>
        </div>

        <div className="occasions-grid">
          {OCCASIONS.map((item) => (
            <article key={item.id} className="occasion-card">
              <Link to="/find" className="occasion-media" aria-label={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="media-icon"><LinkIcon size={18} /></span>
              </Link>

              <div className="occasion-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/find" className="learn-more">
                  LEARN MORE <ArrowRight size={14} className="arrow-icon" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      
      <section className="faq-section">
        <div className="faq-content">
          <div className="faq-heading">
            <div className="faq-eyebrow">
              <span className="faq-line" />
              <span>HOW TO RENT</span>
            </div>
            <h2>Frequently Asked<br />Questions</h2>
          </div>

          <div className="faq-list">
            {FAQS.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={item.q} className={`faq-item ${isOpen ? "active" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-arrow">{isOpen ? "↑" : "↓"}</span>
                  </button>
                  <div className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`} aria-hidden={!isOpen}>
                    <div className="faq-answer-inner"><p>{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="dresses-section">
        <div className="dresses-header">
          <div>
            <div className="sub-title-wrapper">
              <span className="sub-title-line" />
              <span className="dresses-sub-title">FOR ANY OCCASION</span>
            </div>
            <h2 className="dresses-title">Find Gorgeous Dress<br />For Any Occasion</h2>
          </div>
          <Link to="/find" className="view-all-btn">VIEW ALL DRESSES</Link>
        </div>

        <div className="dresses-grid">
          {DRESSES.map((item) => {
            const to = `/product/${item.id}`;
            return (
              <div key={item.id} className="dress-card">
                <Link to={to} className="dress-image-wrapper" aria-label={item.name}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="dress-hover-overlay">
                    <span className="hover-icon-link"><LinkIcon size={18} /></span>
                    <span className="hover-rent-btn">RENT A DRESS</span>
                  </span>
                </Link>

                <div className="dress-info">
                  <h3 className="dress-name"><Link to={to}>{item.name}</Link></h3>
                  {item.rating && <div className="dress-rating">{"★".repeat(item.rating)}</div>}
                  <p className="dress-price">from <span>${item.price}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
      <section className="newsletter-section">
        <h2 className="newsletter-title">Subscribe To Our News!</h2>
        <form className="newsletter-form" onSubmit={subscribe}>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="newsletter-input"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setSubscribed(false); }}
            required
          />
          <button type="submit" className="newsletter-btn">CONTACT US</button>
        </form>
        {subscribed && <p className="newsletter-thanks">Thank you for subscribing!</p>}
      </section>

      
      <footer className="site-footer">
        <div className="footer-grid">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer-col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h3>Stay Connected</h3>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.id} href="#link" className="social-circle" aria-label={s.name}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      
      <button
        type="button"
        className="chat-widget"
        onClick={() => window.alert("Chat with us!")}
        aria-label="Chat with us"
      >
        <MessageCircle size={20} />
        <span>Chat with us!</span>
      </button>
    </div>
  );
}