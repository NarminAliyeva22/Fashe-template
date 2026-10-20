import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import { SERVICES } from "./servicesData";
import { NewsletterSection, SiteFooter, ChatWidget } from "./Shared";
import "./Rent.css";
import "./Occasions.css";
import "./Home.css";

const BANNER = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-15-1155x615.jpg";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!service) {
    return (
      <div className="rent-container">
        <section className="occ-notfound">
          <h2 className="main-title">Service not found</h2>
          <p>We could not find this page. Please go back to the home page.</p>
          <Link to="/" className="view-all-btn">BACK TO HOME</Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="rent-container">
      <section className="rent-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <div className="hero-overlay">
          <h2>{service.title}</h2>
          <div className="breadcrumb">
            <Link to="/">HOME</Link> <span>|</span> <Link to="/">ALL SERVICES</Link> <span>|</span> {service.title.toUpperCase()}
          </div>
        </div>
      </section>

      <section className="sv-wrap">
        <div className="sv-media">
          <img src={service.image} alt={service.title} />
        </div>

        {service.intro.map((p) => <p key={p} className="sv-text">{p}</p>)}

        <div className="dresses-grid sv-products">
          {service.products.map((item) => (
            <div key={item.name} className="dress-card">
              <Link to={item.to} className="dress-image-wrapper" aria-label={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                />
                <span className="dress-hover-overlay">
                  <span className="hover-icon-link"><LinkIcon size={18} /></span>
                  <span className="hover-rent-btn">RENT NOW</span>
                </span>
              </Link>
              <div className="dress-info">
                <h3 className="dress-name"><Link to={item.to}>{item.name}</Link></h3>
                <p className="dress-price">from <span>${item.price}</span></p>
              </div>
            </div>
          ))}
        </div>

        {service.outro.map((p) => <p key={p} className="sv-text">{p}</p>)}

        <Link to="/find" className="view-all-btn sv-shop">TO THE SHOP</Link>
      </section>

      <NewsletterSection />
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}