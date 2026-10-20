import { useEffect, useRef, useState } from "react";
import { Shirt, Heart, Gem, Gift, MessageCircle } from "lucide-react";

const STATS = [
  { id: 1, end: 2208, label: "Dresses were rent", Icon: Shirt },
  { id: 2, end: 1499, label: "Satisfied clients", Icon: Heart },
  { id: 3, end: 105, label: "Fashion designers", Icon: Gem },
  { id: 4, end: 300, label: "Arrivals every month", Icon: Gift },
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

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
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
  );
}

export function StatsSection({ className = "" }) {
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

  return (
    <section ref={statsRef} className={`stats-section ${statsSeen ? "seen" : ""} ${className}`}>
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
  );
}

export function SiteFooter() {
  return (
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
  );
}

export function ChatWidget() {
  return (
    <button
      type="button"
      className="chat-widget"
      onClick={() => window.alert("Chat with us!")}
      aria-label="Chat with us"
    >
      <MessageCircle size={20} />
      <span>Chat with us!</span>
    </button>
  );
}