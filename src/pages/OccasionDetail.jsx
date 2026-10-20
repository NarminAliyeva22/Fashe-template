import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OCCASIONS } from "./occasionsData";
import { NewsletterSection, SiteFooter, ChatWidget } from "./Shared";
import "./Rent.css";
import "./Occasions.css";

export default function OccasionDetail() {
  const { slug } = useParams();
  const occasion = OCCASIONS.find((o) => o.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!occasion) {
    return (
      <div className="rent-container">
        <section className="occ-notfound">
          <h2 className="main-title">Occasion not found</h2>
          <p>We could not find this occasion. Please choose one from the list.</p>
          <Link to="/occasions" className="view-all-btn">BACK TO OCCASIONS</Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const others = OCCASIONS.filter((o) => o.slug !== occasion.slug).slice(0, 3);

  return (
    <div className="rent-container">
      <section className="rent-hero" style={{ backgroundImage: `url(${occasion.image})` }}>
        <div className="hero-overlay">
          <h2>{occasion.title}</h2>
          <div className="breadcrumb">
            <Link to="/">HOME</Link> <span>|</span> <Link to="/occasions">OCCASIONS</Link> <span>|</span> {occasion.title.toUpperCase()}
          </div>
        </div>
      </section>

      <section className="occ-detail">
        <div className="occ-detail-media">
          <img src={occasion.image} alt={occasion.title} />
        </div>

        <div className="occ-detail-info">
          <p className="sub-title">OCCASION</p>
          <h2 className="main-title">{occasion.title}</h2>
          <p className="occ-detail-intro">{occasion.intro}</p>

          <h3 className="occ-detail-h">Perfect for</h3>
          <ul className="occ-list">
            {occasion.perfectFor.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h3 className="occ-detail-h">Styling tips</h3>
          <ul className="occ-list">
            {occasion.tips.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <div className="occ-actions">
            <Link to="/find" className="view-all-btn">FIND A DRESS</Link>
            <Link to="/occasions" className="learn-more">
              ALL OCCASIONS <ArrowRight size={14} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="occ-more">
        <h2 className="main-title">Other Occasions</h2>
        <div className="occ-more-grid">
          {others.map((o) => (
            <Link key={o.id} to={`/occasions/${o.slug}`} className="occ-more-card">
              <img src={o.image} alt={o.title} loading="lazy" />
              <span className="occ-more-title">{o.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSection />
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}