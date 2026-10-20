import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('Zəhmət olmasa şərtləri qəbul edin.');
      return;
    }
    console.log('Form data:', formData);
    alert('Mesajınız göndərildi!');
  };

  return (
    <div className="contact-page">
     
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contacts</h1>
          <p className="breadcrumb">HOME | CONTACTS</p>
        </div>
      </section>

      
      <section className="contact-info-section">
        <div className="container contact-grid">
          
          <div className="contact-details">
            <span className="subtitle">OUR CONTACTS</span>
            <h2 className="title">Get In Touch With Us</h2>

            <div className="info-cards">
              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="card-content">
                  <h3>@FindYourDress</h3>
                  <p>Follow us on instagram</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="card-content">
                  <h3>123 New York, NY 60606</h3>
                  <p>Try on our dresses in showroom</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="card-content">
                  <h3>0 800 555 44 11</h3>
                  <p>Contact us by telephone</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="card-content">
                  <h3>info@example.co.m</h3>
                  <p>Write us a message</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280006548!2d-74.11976373946229!3d40.69766371917818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1690000000000!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      
      <section className="contact-form-section">
        <div className="container form-wrapper">
          <h2>Drop A Line</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                <span>I agree that my submitted data is being collected and stored.</span>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-col">
            <h4>Hire Dresses</h4>
            <ul>
              <li><a href="#evening">Evening Dress</a></li>
              <li><a href="#prom">Prom Dress</a></li>
              <li><a href="#wedding">Wedding Guest Dress</a></li>
              <li><a href="#cocktail">Cocktail Dress Hire</a></li>
              <li><a href="#party">Party Dress Hire</a></li>
              <li><a href="#birthday">Birthday Party Dress Hire</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#works">How it Works</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#service">Advanced Try On Service</a></li>
              <li><a href="#size">Size Chart</a></li>
              <li><a href="#delivery">Delivery Information</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#hiring">We're Hiring</a></li>
              <li><a href="#agreement">Rental Agreement</a></li>
              <li><a href="#discount">Student Discount</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay Connected</h4>
            <div className="social-links">
              <a href="#twitter" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#behance" aria-label="Behance">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 16v1a2 2 0 0 1-2 2H3v-2h11v-1zm0-4H3v-2h13v2zm1-5h-4V5h4v2z"></path></svg>
              </a>
              <a href="#facebook" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#dribbble" aria-label="Dribbble">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>AncoraThemes © 2026. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;