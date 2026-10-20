import { Link } from "react-router-dom";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { OCCASIONS, ACCESSORIES, ACCESSORIES_BG } from "./occasionsData";
import { NewsletterSection, StatsSection, SiteFooter, ChatWidget } from "./Shared";
import "./Rent.css";
import "./Occasions.css";

const HERO_IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";

export default function Occasions() {
  return (
    <div className="rent-container">
      <section className="rent-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="hero-overlay">
          <h2>Occasions</h2>
          <div className="breadcrumb">
            <Link to="/">HOME</Link> <span>|</span> OCCASIONS
          </div>
        </div>
      </section>

      <section className="occasions-section">
        <div className="section-header">
          <p className="sub-title">RENT A DRESS</p>
          <h2 className="main-title">Choose Your<br />Occasion</h2>
        </div>

        <div className="occasions-grid">
          {OCCASIONS.map((item) => {
            const to = `/occasions/${item.slug}`;
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
                    <img
                      src={a.image}
                      alt={a.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                    />
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