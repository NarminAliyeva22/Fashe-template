import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { HERO_SLIDES, SERVICES, DRESSES } from "./servicesData";
import { ACCESSORIES, ACCESSORIES_BG } from "./occasionsData";
import { NewsletterSection, StatsSection, SiteFooter, ChatWidget } from "./Shared";
import "./Rent.css";
import "./Occasions.css";
import "./Home.css";

const STYLIST_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-6-1155x615.jpg";


function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className="hm-hero" aria-roledescription="carousel" aria-label="Featured offers">
      {HERO_SLIDES.map((s, i) => (
        <div key={s.id} className={`hm-slide ${i === active ? "active" : ""}`} aria-hidden={i !== active}>
          <div className="hm-bg" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="hm-shade" />
          <div className="hm-content">
            <div className="hm-eyebrow">
              <i /><span>{s.eyebrow}</span><i />
            </div>
            <h2 className="hm-title">{s.title}</h2>
            <Link to={s.to} className="hm-btn" tabIndex={i === active ? 0 : -1}>{s.button}</Link>
          </div>
        </div>
      ))}

      <div className="hm-dots">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`hm-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </section>
  );
}


function StylistSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="hm-stylist">
      <div className="hm-stylist-media">
        <img src={STYLIST_IMG} alt="Our stylist" loading="lazy" />
      </div>
      <div className="hm-stylist-body">
        <p className="sub-title">ASK A STYLIST</p>
        <h2 className="main-title">Great Look With<br />Our Stylist</h2>
        <p className="hm-stylist-text">
          If you don’t know what to wear and need some styling advice you have an opportunity to book an appointment with one of our stylists.
        </p>
        <form className="newsletter-form hm-stylist-form" onSubmit={submit}>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="newsletter-input"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setSent(false); }}
            required
          />
          <button type="submit" className="newsletter-btn">CONTACT US</button>
        </form>
        {sent && <p className="newsletter-thanks">Thank you! A stylist will contact you soon.</p>}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="rent-container">
      <HeroSlider />

   
      <section className="occasions-section">
        <div className="section-header">
          <p className="sub-title">RENT A DRESS</p>
          <h2 className="main-title">Welcome To Dress<br />Rental Service</h2>
        </div>

        <div className="occasions-grid">
          {SERVICES.map((item) => {
            const to = `/services/${item.slug}`;
            return (
              <article key={item.id} className="occasion-card">
                <Link to={to} className="occasion-media" aria-label={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="media-icon"><LinkIcon size={18} /></span>
                </Link>
                <div className="occasion-info">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={to} className="learn-more">
                    LEARN MORE <ArrowRight size={14} className="arrow-icon" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <StylistSection />

   
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

      <div className="acc-outer">
        <section className="acc-section" style={{ "--acc-bg": `url(${ACCESSORIES_BG})` }}>
          <div className="acc-content">
            <div className="acc-eyebrow">
              <span className="acc-line" />
              <span>BEAUTIFUL ACCESSORIES</span>
            </div>
            <h2 className="acc-title">Complete Your<br />Perfect Look</h2>
            <p className="acc-text">
              Complete your look with fascinators, clutches and jewellery. Look absolutely glamorous and perfect at your event day!
            </p>
            <div className="acc-grid">
              {ACCESSORIES.map((a) => (
                <Link to="/find" key={a.id} className="acc-item">
                  <span className="acc-thumb">
                    <img src={a.image} alt={a.name} loading="lazy" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
                  </span>
                  <span className="acc-name">{a.name}</span>
                  <span className="acc-price">from <b>${a.price}</b></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <NewsletterSection />
      <StatsSection className="stats-after-news" />
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}