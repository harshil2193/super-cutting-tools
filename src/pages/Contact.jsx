import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
// import "../src/styles.css";

function Contact() {
  return (
    <div>

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help — reach out anytime</p>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-section">

        {/* LEFT — INFO */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          {/* Address */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info-text">
              <h4>Our Address</h4>
              <p>
                Shade no. 330, Vishal Chowk,<br />
                Opp. V-Transport, Phase-II,<br />
                Dared, Jamnagar, Gujarat, India
              </p>
            </div>
          </div>

           {/* Phone */}
          <div className="contact-info-item">
            <div className="contact-info-icon phone">
              <FaPhone />
            </div>
            <div className="contact-info-text">
              <h4>Phone</h4>
              <a href="tel:+919427224008" className="contact-phone-link">
                +91 94272 24008
              </a><br />
              <a href="tel:+919429335336" className="contact-phone-link">
                +91 94293 35336
              </a>
            </div>
          </div>

            {/* Email */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <FaEnvelope />
            </div>
            <div className="contact-info-text">
              <h4>Email</h4>
              <a
                href="mailto:supercuttingtools@gmail.com"
                className="contact-email-link"
              >
                <span className="red">super</span><span className="blue">cuttingtools</span>24008@gmail.com
              </a>
            </div>
          </div>
 

          {/* WhatsApp */}
          <div className="contact-info-item">
            <div className="contact-info-icon whatsapp">
              <FaWhatsapp />
            </div>
            <div className="contact-info-text">
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/919427224008"
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-link"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          

        </div>

        {/* RIGHT — FORM */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <div className="contact-form-fields">
            <input placeholder="Your Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Email Address" />
            <textarea placeholder="Your Message" rows={5} />
            <button className="contact-submit-btn">Send Message</button>
          </div>

        </div>

      </div>

      {/* MAP SECTION */}
      <div className="contact-map">
        <h2>Find Us On Map</h2>
        <iframe
          title="Super Cutting Tools Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.887!2d70.0540339!3d22.416454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b36094e0a37%3A0x1f721616668f0d60!2sSuper%20Cutting%20Tools!5e0!3m2!1sen!2sin!4v1715000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

export default Contact;